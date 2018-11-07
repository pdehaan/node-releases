#!/usr/bin/env node

const releases = require("./lib");

main();

async function main() {
  const res = await releases();
  console.log(JSON.stringify(res));
}
