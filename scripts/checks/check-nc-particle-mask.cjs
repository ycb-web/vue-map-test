const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.resolve(__dirname, '../../src/utils/leaflet-vector-scalar.js'), 'utf8');
const header = { parameterCategory: 2, nx: 3, ny: 2, lo1: 110, la1: 23, dx: 0.075, dy: 0.075, refTime: '2026-10-09T12:00:00Z', forecastTime: 0 };
const records = (u, v) => [
  { header: { ...header, parameterNumber: 2 }, data: u },
  { header: { ...header, parameterNumber: 3 }, data: v },
];
const failures = [];
let passed = 0;
function check(name, test) {
  try { test(); passed++; } catch (error) { failures.push(`${name}: ${error.message}`); }
}
function engine(name, data) {
  const start = source.indexOf(name === 'wind' ? 'var Windy = function Windy(params)' : 'var WaveParticleEngine = function (params)');
  const end = name === 'wind' ? source.indexOf('if (!window.cancelAnimationFrame)', start) : source.length;
  const target = name === 'wind' ? 'windy' : 'engine';
  const code = source.slice(start, end).replace(`return ${target};`, `return Object.assign(${target}, { buildGrid, interpolate, createField, animate });`);
  let now = 0;
  let next;
  const strokes = [];
  let from, to;
  const ctx = { canvas: { width: 10, height: 10 }, clearRect() {}, fillRect() {}, beginPath() {}, moveTo(x, y) { from = [x, y]; }, lineTo(x, y) { to = [x, y]; }, stroke() { strokes.push({ from, to }); } };
  const sandbox = {
    window: { devicePixelRatio: 1 }, navigator: { userAgent: 'node' },
    L: { point: (x, y) => ({ x, y }), latLng: (lat, lng) => ({ lat, lng }) },
    Date: class extends Date { static now() { return now; } },
    requestAnimationFrame: callback => { next = callback; return 1; }, cancelAnimationFrame() {},
    setTimeout: callback => callback(), console, Math: Object.assign(Object.create(Math), { random: () => 0.1 }),
  };
  const helperStart = source.indexOf('function isParticlePathDefined(');
  const helperEnd = source.indexOf('var Windy = function Windy(params)');
  vm.runInNewContext((helperStart >= 0 ? source.slice(helperStart, helperEnd) : '') + code, sandbox);
  const result = new sandbox[name === 'wind' ? 'Windy' : 'WaveParticleEngine']({
    data, particleMultiplier: 0.01,
    map: {
      containerPointToLatLng: p => ({ lng: 110 + (0.75 + p.x * 0.5) * 0.075, lat: 23 - 0.5 * 0.075 }),
    },
    canvas: { getContext: () => ctx },
  });
  result.buildGrid(data, () => {});
  return { result, strokes, frame() { now += 100; const callback = next; next = null; callback(); } };
}

for (const name of ['wind', 'wave']) {
  const valid = () => [4, 4, 4, 4, 4, 4];
  check(`${name}: valid interpolation`, () => {
    const { result } = engine(name, records(valid(), valid()));
    const sample = result.interpolate(110.0375, 22.9625);
    assert.ok(Math.abs(sample[0] - 4) < 1e-9);
  });
  check(`${name}: valid zero component`, () => {
    const { result } = engine(name, records([0, 0, 0, 0, 0, 0], valid()));
    assert.equal(result.interpolate(110.0375, 22.9625)[2], 4);
  });
  for (const missing of [null, undefined, NaN, Infinity, -Infinity]) {
    for (const component of [0, 1]) {
      for (const corner of [0, 1, 3, 4]) {
        check(`${name}: component ${component}, corner ${corner}, ${String(missing)}`, () => {
          const u = valid(), v = valid();
          (component === 0 ? u : v)[corner] = missing;
          const { result } = engine(name, records(u, v));
          assert.equal(result.interpolate(110.0375, 22.9625), null, 'missing data must not become a particle velocity');
        });
      }
    }
  }
  check(`${name}: all missing stays missing`, () => {
    const data = Array(6).fill(null);
    assert.equal(engine(name, records(data, data)).result.interpolate(110.0375, 22.9625), null);
  });
  check(`${name}: 2px cache cannot extend over the mask boundary`, () => {
    const data = [4, 4, null, 4, 4, null];
    const { result } = engine(name, records(data, data));
    const columns = [[[1, 0, 4]], [[1, 0, 4]]];
    result.createField(columns, { width: 2, height: 1, x: 0, y: 0 }, (bounds, field) => {
      assert.equal(field(0, 0)[2], 4);
      assert.equal(field(1, 0)[2], null, 'copied cached velocity must respect the exact geographic mask');
    });
  });
  check(`${name}: live particle does not reuse an old target after entering missing data`, () => {
    const h = engine(name, records(valid(), valid()));
    let phase = 0;
    const field = (x, y) => phase === 0 || x < 3.5 ? [1, 0, 4] : [NaN, NaN, null];
    field.randomize = particle => Object.assign(particle, { x: 2, y: 2 });
    h.result.animate({ width: 10, height: 10, x: 0, y: 0 }, field);
    h.frame();
    assert.equal(h.strokes.length, 1, 'valid particle is drawn');
    phase = 1;
    h.frame();
    assert.equal(h.strokes.length, 1, 'no new stroke when the particle loses data');
  });
  check(`${name}: a trajectory cannot cross a missing strip between valid endpoints`, () => {
    const h = engine(name, records(valid(), valid()));
    const field = (x, y) => x > 2.5 && x < 3.5 ? [NaN, NaN, null] : [2, 0, 4];
    field.randomize = particle => Object.assign(particle, { x: 2, y: 2 });
    h.result.animate({ width: 10, height: 10, x: 0, y: 0 }, field);
    h.frame();
    assert.equal(h.strokes.length, 0, 'do not bridge missing land with a new particle stroke');
  });
}
check('wave: the transverse crest cannot extend into missing data', () => {
  const h = engine('wave', records(Array(6).fill(4), Array(6).fill(4)));
  const field = (x, y) => y < 1 ? [NaN, NaN, null] : [1, 0, 4];
  field.randomize = particle => Object.assign(particle, { x: 2, y: 2 });
  h.result.animate({ width: 10, height: 10, x: 0, y: 0 }, field);
  h.frame();
  assert.equal(h.strokes.length, 0, 'check the full crest, not just the particle center');
});
for (const missing of [null, undefined, NaN, Infinity, -Infinity]) {
  for (const parameterNumber of [10, 11]) {
    check(`wave direction/period: parameter ${parameterNumber}=${String(missing)}`, () => {
      const data = [
        { header: { ...header, parameterCategory: 0, parameterNumber: 10 }, data: Array(6).fill(0) },
        { header: { ...header, parameterCategory: 0, parameterNumber: 11 }, data: Array(6).fill(5) },
      ];
      data.find(r => r.header.parameterNumber === parameterNumber).data[0] = missing;
      assert.equal(engine('wave', data).result.interpolate(110.0375, 22.9625), null);
    });
  }
}
check('wave direction/period: north direction 0 remains valid', () => {
  const data = [
    { header: { ...header, parameterCategory: 0, parameterNumber: 10 }, data: Array(6).fill(0) },
    { header: { ...header, parameterCategory: 0, parameterNumber: 11 }, data: Array(6).fill(5) },
  ];
  assert.equal(engine('wave', data).result.interpolate(110.0375, 22.9625)[2], 2);
});
if (failures.length) {
  console.error(`${failures.length} failed; ${passed} passed. First failures:\n${failures.slice(0, 12).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`particle mask: ${passed} checks passed (wind/wave interpolation, finite components, zero, mask boundary and particle expiry)`);
}
