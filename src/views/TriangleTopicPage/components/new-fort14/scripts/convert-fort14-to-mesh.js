#!/usr/bin/env node
"use strict";

/**
 * 将 new-fort14 下的 fort.14 转成前端运行时使用的 mesh.json。
 *
 * 默认输入:
 *   src/views/TriangleTopicPage/components/new-fort14/source/fort.14
 *
 * 默认输出:
 *   public/data/triangle-topic/new-fort14/mesh.json
 */

const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "..",
  ".."
);
const defaultInput = path.join(
  projectRoot,
  "src",
  "views",
  "TriangleTopicPage",
  "components",
  "new-fort14",
  "source",
  "fort.14"
);
const defaultOutput = path.join(
  projectRoot,
  "public",
  "data",
  "triangle-topic",
  "new-fort14",
  "mesh.json"
);

const inputFile = path.resolve(process.argv[2] || defaultInput);
const outputFile = path.resolve(process.argv[3] || defaultOutput);

if (!fs.existsSync(inputFile)) {
  console.error(`输入文件不存在: ${inputFile}`);
  process.exit(1);
}

const text = fs.readFileSync(inputFile, "utf-8");
const lines = text.trim().split("\n");

const title = lines[0].trim();
const header = lines[1].trim().split(/\s+/);
const numElements = Number.parseInt(header[0], 10);
const numNodes = Number.parseInt(header[1], 10);

console.log(`标题: ${title}`);
console.log(`节点数: ${numNodes}, 三角形数: ${numElements}`);

const nodes = [];
let valueMin = Infinity;
let valueMax = -Infinity;
for (let i = 0; i < numNodes; i += 1) {
  const parts = lines[i + 2].trim().split(/\s+/);
  const value = Number.parseFloat(parts[3]);
  nodes.push(
    Number.parseFloat(parts[1]),
    Number.parseFloat(parts[2]),
    value
  );
  valueMin = Math.min(valueMin, value);
  valueMax = Math.max(valueMax, value);
}

const elements = [];
const elemStart = 2 + numNodes;
for (let i = 0; i < numElements; i += 1) {
  const parts = lines[elemStart + i].trim().split(/\s+/);
  elements.push(
    Number.parseInt(parts[2], 10) - 1,
    Number.parseInt(parts[3], 10) - 1,
    Number.parseInt(parts[4], 10) - 1
  );
}

const output = {
  title,
  numNodes,
  numElements,
  valueRange: {
    min: valueMin,
    max: valueMax,
  },
  nodes,
  elements,
};

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(output));

const originalSize = fs.statSync(inputFile).size;
const jsonSize = fs.statSync(outputFile).size;

console.log(`输入: ${inputFile}`);
console.log(`输出: ${outputFile}`);
console.log(`fort.14: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`mesh.json: ${(jsonSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`值域: ${valueMin.toFixed(3)} ~ ${valueMax.toFixed(3)}`);
