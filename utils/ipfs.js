const Caver = require("caver-js");
const fs = require("fs");
const rpcURL = "https://api.baobab.klaytn.net:8651/";
const basePath = process.cwd();
const inputDir = `${basePath}/build/images`;
const { projectId } = require(`${basePath}/src/config.js`);

const caver = new Caver(rpcURL);

// Set connection with IPFS Node
caver.ipfs.setIPFSNode("ipfs.infura.io", 5001, true);

let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

let requests = data.map((item) => {
  return new Promise((resolve, reject) => {
    const _file = `${inputDir}/${item.edition + 1000000 * projectId}.png`;
    caver.ipfs.add(_file).then((cid) => {
      console.log(`uploaded: ${cid}`);
      item.image = `ipfs://${cid}`;
      fs.writeFileSync(
        `${basePath}/build/json/${item.edition + 1000000 * projectId}.json`,
        JSON.stringify(item, null, 2)
      );
      resolve();
    });
  });
});

Promise.all(requests).then(() => {
  //   console.log(`cid: ${res}`);
  console.log(data);
  fs.writeFileSync(
    `${basePath}/build/json/_metadata.json`,
    JSON.stringify(data, null, 2)
  );
});
