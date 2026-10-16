import L from "leaflet";
import "./leaflet-vector-scalar";

/**
 * Render the page's speed/Hs record directly, using its own geographic header.
 * No contour extraction, ring smoothing or manual coordinate shift is applied.
 */
export function createNcScalarFieldLayer(record, levels, options = {}) {
  const colorScale = levels.map(({ threshold, color }) => [
    threshold,
    [1, 3, 5].map((offset) => parseInt(color.slice(offset, offset + 2), 16)),
  ]);
  return L.scalarTileLayer({
    data: [record],
    displayValues: false,
    pane: "scalarFieldPane",
    minValue: levels[0].threshold,
    maxValue: levels[levels.length - 1].threshold,
    colorScale,
    overlayOpacity: 1,
    opacity: options.opacity === undefined ? 0.65 : options.opacity,
    bounds: options.bounds,
    noWrap: true,
  });
}
