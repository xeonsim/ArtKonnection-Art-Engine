// General metadata
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://aewuogngbenawtgerafdwfrbt";
const projectId = 3;

const _edtionSize = 10;

const layerConfigurations = [
  {
    growEditionSizeTo: _edtionSize,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const pixelFormat = {
  ratio: 10 / 128,
};

const extraMetadata = {
  external_url: "",
  youtube_url: "",
  creator: "",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const debugLogs = false;

module.exports = {
  format,
  baseUri,
  description,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,

  debugLogs,
  extraMetadata,
  pixelFormat,
  namePrefix,
  projectId,
};
