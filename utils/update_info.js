const basePath = process.cwd();
const fs = require("fs");

const {
  description,
  namePrefix,
  projectId,
  useBaseIpfs,
  extraMetadata,
} = require(`${basePath}/src/config.js`);

// read json data
let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

data.forEach((item) => {
  item.name = `${namePrefix} #${item.edition}`;
  item.description = description;
  useBaseIpfs
    ? (item.image = `${baseIpfsUrl}/${item.edition + 1000000 * projectId}.png`)
    : null;
  for (let key of Object.keys(extraMetadata)) {
    item[key] = extraMetadata[key];
  }
  fs.writeFileSync(
    `${basePath}/build/json/${item.edition + 1000000 * projectId}.json`,
    JSON.stringify(item, null, 2)
  );
});

fs.writeFileSync(
  `${basePath}/build/json/_metadata.json`,
  JSON.stringify(data, null, 2)
);

console.log(`Updated description for images to ===> ${description}`);
console.log(`Updated name prefix for images to ===> ${namePrefix}`);
