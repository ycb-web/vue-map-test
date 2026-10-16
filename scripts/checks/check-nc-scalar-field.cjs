const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');
const source = fs.readFileSync(path.join(root, 'src/utils/leaflet-vector-scalar.js'), 'utf8');
const start = source.indexOf('L.ScalarTileLayer =');
const end = source.indexOf('L.scalarTileLayer =', start);
const L = { GridLayer: { extend: definition => definition } };
vm.runInNewContext(source.slice(start, end), {
  L,
  µ: { isValue: value => value !== null && value !== undefined, floorMod: (x, n) => ((x % n) + n) % n },
});
const layer = Object.create(L.ScalarTileLayer);
const header = { parameterCategory: 0, parameterNumber: 100, parameterNumberName: 'hs', nx: 3, ny: 3, lo1: 110, lo2: 110.15, la1: 23, la2: 22.85, dx: 0.075, dy: 0.075 };
const values = [null, 0, 2, 3, 4, 5, 6, 7, 8];
layer.options = { data: [{ header, data: values }] };
layer._processData();
assert.equal(layer._windData[0], null, 'land remains missing rather than Math.abs(null) = 0');
assert.equal(layer._windData[1], 0, 'valid zero wave height remains valid');
const sample = layer._scalarGridBuilder.interpolate(110 + 1.5 * 0.075, 23 - 0.5 * 0.075);
assert.ok(Math.abs(sample - 2.75) < 1e-9, 'geographic midpoint matches the four input grid values');
assert.equal(layer._scalarGridBuilder.interpolate(110 + 0.5 * 0.075, 23 - 0.5 * 0.075), null, 'interpolation crossing missing data stays transparent');
const factorySource = fs.readFileSync(path.join(root, 'src/utils/nc-scalar-field.js'), 'utf8').replace(/^import[^;]+;\s*/gm, '').replace('export function', 'function');
let options;
const sandbox = { L: { scalarTileLayer: value => (options = value) } };
vm.runInNewContext(factorySource, sandbox);
sandbox.createNcScalarFieldLayer(layer.options.data[0], [{ threshold: 0, color: '#1990FF' }, { threshold: 2, color: '#EE472E' }], { bounds: [[22.85, 110], [23, 110.15]], opacity: 0.4 });
assert.equal(options.data.length, 1, 'use Hs or speed alone, without recalculating it from vector components');
assert.equal(options.data[0], layer.options.data[0]);
assert.equal(options.opacity, 0.4);
assert.equal(options.overlayOpacity, 1);
assert.equal(options.pane, 'scalarFieldPane');
console.log('scalar field: geographic interpolation, missing values, valid zero and source record checks passed');
