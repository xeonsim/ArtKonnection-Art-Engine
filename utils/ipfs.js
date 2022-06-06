const Caver = require("caver-js");
const fs = require("fs");
const rpcURL = "https://api.baobab.klaytn.net:8651/";
const basePath = process.cwd();
const inputDir = `${basePath}/build/images`;
const { projectId } = require(`${basePath}/src/config.js`);

const caver = new Caver(rpcURL);

// Set connection with IPFS Node
// ipfs.infura.io  or  infura-ipfs.io
caver.ipfs.setIPFSNode("infura-ipfs.io", 5001, true);

let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
let data = JSON.parse(rawdata);

let requests = data.map((item) => {
  return new Promise((resolve, reject) => {
    const uploadedIMG = JSON.parse(
      fs.readFileSync(
        `${basePath}/build/json/${projectId * 1000000 + item.edition}.json`
      )
    ).image;

    if (uploadedIMG === "") {
      const _file = `${inputDir}/${item.edition + 1000000 * projectId}.png`;
      caver.ipfs
        .add(_file)
        .then((cid) => {
          console.log(`uploaded: ${cid}`);
          item.image = `ipfs://${cid}`;
          fs.writeFileSync(
            `${basePath}/build/json/${item.edition + 1000000 * projectId}.json`,
            JSON.stringify(item, null, 2)
          );
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      console.log(`file already uploaded to: ${uploadedIMG}`);
      item.image = uploadedIMG;
      resolve();
    }
  });
});

Promise.all(requests)
  .then(() => {
    console.log(data);
    fs.writeFileSync(
      `${basePath}/build/json/_metadata.json`,
      JSON.stringify(data, null, 2)
    );
  })
  .catch((err) => {
    console.log(err);
  });
