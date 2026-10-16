import assert from 'node:assert/strict';
import fs from 'node:fs';

// Exercise the production conversion without adding a test runner or a build.
const file = new URL('../../src/utils/marching-squares-geojson.js', import.meta.url);
const dependency = new URL('../../node_modules/d3-contour/src/index.js', import.meta.url);
const source = fs.readFileSync(file, 'utf8').replace(
  'from "d3-contour"',
  `from ${JSON.stringify(dependency.href)}`
);
const { gridToIsosurfaceGeoJSON } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
);
const width = 7;
const height = 7;
const step = 0.075;
const west = 110;
const north = 23;
const bounds = [[north - (height - 1) * step, west], [north, west + (width - 1) * step]];
const levels = [{ threshold: 2.5, color: '#1990FF', text: 'reference' }];
let failures = 0;
for (const axis of ['longitude', 'latitude']) {
  const data = Array.from({ length: width * height }, (_, i) =>
    axis === 'longitude' ? i % width : Math.floor(i / width)
  );
  const result = gridToIsosurfaceGeoJSON({ data, width, height, bounds, levels, smoothIterations: 0 });
  const points = result.geojson.features[0].geometry.coordinates.flat(2);
  const interior = points.filter(([lng, lat]) => axis === 'longitude'
    ? lat < north - step && lat > north - 5 * step
    : lng > west + step && lng < west + 5 * step);
  const expected = axis === 'longitude' ? west + 2.5 * step : north - 2.5 * step;
  const actual = axis === 'longitude'
    ? Math.min(...interior.map(p => p[0]))
    : Math.max(...interior.map(p => p[1]));
  const delta = actual - expected;
  console.log(`${axis}: expected=${expected}, actual=${actual}, delta=${delta.toFixed(7)} degrees`);
  try { assert.ok(Math.abs(delta) < 0.000051, `${axis} contour must intersect its original grid threshold`); }
  catch (error) { failures++; console.error(error.message); }
}
process.exitCode = failures ? 1 : 0;

// Keep the diagnosis toggle reproducible: legacy coordinates are half a cell southeast.
const probe = Array.from({ length: width * height }, (_, i) => i % width);
const common = { data: probe, width, height, bounds, levels, smoothIterations: 0 };
const corrected = gridToIsosurfaceGeoJSON(common).geojson.features[0].geometry.coordinates.flat(2);
const legacy = gridToIsosurfaceGeoJSON({ ...common, alignToGridCenters: false }).geojson.features[0].geometry.coordinates.flat(2);
for (let i = 0; i < corrected.length; i++) {
  assert.ok(Math.abs(legacy[i][0] - corrected[i][0] - step / 2) < 0.000051);
  assert.ok(Math.abs(legacy[i][1] - corrected[i][1] + step / 2) < 0.000051);
}
const missing = gridToIsosurfaceGeoJSON({ ...common, data: Array(width * height).fill(null) });
assert.equal(missing.featureCount, 0, 'missing grids must not produce a colored contour');
const truncated = gridToIsosurfaceGeoJSON({ ...common, data: [], levels: [{ threshold: 0, color: '#fff', text: 'zero' }] });
assert.equal(truncated.featureCount, 0, 'missing tail values must not be initialized as zero');
console.log('legacy comparison and missing-data checks passed');
