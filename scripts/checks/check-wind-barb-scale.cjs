const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');
const source = fs.readFileSync(path.join(root, 'src/utils/leaflet-vector-scalar.js'), 'utf8');
const begin = source.indexOf('L.VectorBarbLayer =');
const finish = source.indexOf('L.vectorBarbLayer =', begin);
const L = { VectorArrowLayer: { extend: definition => definition } };
vm.runInNewContext(source.slice(begin, finish), { L });
const layer = Object.create(L.VectorBarbLayer);
layer.options = { ...L.VectorBarbLayer.options, barbSize: 28 };

function draw(u, v) {
  if (arguments.length < 2) v = 0;
  let current;
  const result = { full: 0, half: 0, flags: 0, shafts: 0 };
  const ctx = {
    save() {}, restore() {}, translate() {}, rotate() {},
    beginPath() { current = []; },
    moveTo(x, y) { current.push([x, y]); },
    lineTo(x, y) { current.push([x, y]); },
    stroke() {
      const height = Math.abs(current[1][1] - current[0][1]);
      if (height === 0) result.shafts++;
      else if (height === 10) result.full++;
      else if (height === 5) result.half++;
      else throw new Error(`unexpected feather height ${height}`);
    },
    fill() {
      assert.equal(current.length, 3, 'a pennant has three vertices');
      result.flags++;
    },
  };
  layer._drawBarb(ctx, 0, 0, u, v);
  return result;
}

const page = fs.readFileSync(path.join(root, 'src/views/NcWindRangePage/index.vue'), 'utf8');
const methodBegin = page.indexOf('    getBeaufortLevelInfo(speed) {');
const methodFinish = page.indexOf('    showPointPopup(', methodBegin);
const level = vm.runInNewContext(`({${page.slice(methodBegin, methodFinish)}})`).getBeaufortLevelInfo;
let checks = 0;
for (let knots = 5; knots <= 200; knots += 5) {
  const actual = draw(knots * 1852 / 3600);
  assert.equal(actual.flags * 50 + actual.full * 10 + actual.half * 5, knots);
  assert.equal(actual.shafts, 1);
  checks++;
}
// Probe both sides of half-step rounding, using exact knot conversion.
for (const boundary of [7.5, 12.5, 17.5, 22.5, 27.5, 32.5, 47.5, 52.5]) {
  for (const delta of [-0.001, 0.001]) {
    const knots = boundary + delta;
    const actual = draw(knots * 1852 / 3600);
    assert.equal(actual.flags * 50 + actual.full * 10 + actual.half * 5, Math.round(knots / 5) * 5);
    checks++;
  }
}
const examples = [
  { speed: 6, grade: 4, knots: 10, full: 1, half: 0 },
  { speed: 10, grade: 5, knots: 20, full: 2, half: 0 },
  { speed: 12, grade: 6, knots: 25, full: 2, half: 1 },
  { speed: 15, grade: 7, knots: 30, full: 3, half: 0 },
  { speed: 19, grade: 8, knots: 35, full: 3, half: 1 },
];
for (const row of examples) {
  assert.equal(level(row.speed).level, row.grade);
  const actual = draw(row.speed);
  assert.equal(actual.full, row.full);
  assert.equal(actual.half, row.half);
  assert.equal(actual.flags, 0);
  checks++;
}
for (const [speed, grade] of [[7.999, 4], [8, 5], [10.799, 5], [10.8, 6], [13.899, 6], [13.9, 7], [17.199, 7], [17.2, 8]]) {
  assert.equal(level(speed).level, grade);
  checks++;
}
for (const missing of [null, undefined, NaN, Infinity, -Infinity]) {
  assert.equal(draw(missing).shafts, 0);
  assert.equal(draw(4, missing).shafts, 0);
  checks += 2;
}
for (const [lower, upper] of [[7.9, 8], [10.7, 10.8]]) {
  assert.notEqual(level(lower).level, level(upper).level);
  assert.deepEqual(draw(lower), draw(upper), '5 kt rounding may give adjacent grades the same symbol');
  checks++;
}
console.table(examples.map(row => ({ 'm/s': row.speed, 'page grade': row.grade === 8 ? '>=8' : row.grade, 'rounded kt': row.knots, 'full feathers': row.full, 'half feathers': row.half })));
console.log(`wind barb scale: ${checks} checks passed (actual Canvas geometry, 5/10/50 kt, rounding and page grade thresholds)`);
