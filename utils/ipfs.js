const Caver = require("caver-js");
const fs = require("fs");
const rpcURL = "https://api.baobab.klaytn.net:8651/";
const basePath = process.cwd();
const inputDir = `${basePath}/build/images`;
const { projectId } = require(`${basePath}/src/config.js`);

const test = async () => {
  const IPFS = await import("ipfs-core");
  const ipfs = await IPFS.create();
  const { cid } = await ipfs.add(`${inputDir}/${1 + 1000000 * projectId}.png`);
  console.info(cid);
};
test();
/**
 * Example code about "Using IPFS with Caver."
 * Related article - Korean: https://medium.com/klaytn/caver%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-ipfs-%EC%82%AC%EC%9A%A9%EB%B2%95-4889a3b29c0b
 * Related article - English: https://medium.com/klaytn/using-ipfs-with-caver-964e1f721bfe
 */
const caver = new Caver(rpcURL);
// Set connection with IPFS Node
caver.ipfs.setIPFSNode("ipfs.infura.io", 5001, true);

let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

const main = () => {
  data.forEach((item) => {
    const _file = `${inputDir}/${item.edition + 1000000 * projectId}.png`;
    caver.ipfs.add(_file).then((cid) => {
      console.log(`cid: ${cid}`);
      item.image = `ipfs://${cid}`;
      fs.writeFileSync(
        `${basePath}/build/json/${item.edition + 1000000 * projectId}.json`,
        JSON.stringify(item, null, 2)
      );
    });
  });
  console.log(data);
  fs.writeFileSync(
    `${basePath}/build/json/_metadata.json`,
    JSON.stringify(data, null, 2)
  );
};
// main();
