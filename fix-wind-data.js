const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src/assets/wind.json");

try {
  const data = fs.readFileSync(filePath, "utf8");
  const json = JSON.parse(data);

  if (json.length === 1) {
    console.log("Found 1 component. Duplicating for V component...");
    const uComponent = json[0];

    // Create V component (deep copy of U)
    const vComponent = JSON.parse(JSON.stringify(uComponent));

    // Modify header for V
    vComponent.header.parameterNumber = 3;
    vComponent.header.parameterNumberName = "V-component_of_wind";

    // Optional: modify data to make it different?
    // For testing, identical U and V means 45 degree wind everywhere (if positive)
    // Let's leave it as is for simplicity.

    const newJson = [uComponent, vComponent];

    fs.writeFileSync(filePath, JSON.stringify(newJson, null, 2));
    console.log("Successfully updated wind.json with U and V components.");
  } else {
    console.log("wind.json already has " + json.length + " components.");
  }
} catch (err) {
  console.error("Error processing file:", err);
}
