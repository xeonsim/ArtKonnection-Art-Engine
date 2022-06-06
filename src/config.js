// 필수 설정 사항 
//===================================================================
//===================================================================
const namePrefix = "TestCollection";
// 컬렉션 이름입니다.
const description = "Remember to replace this description";
// 컬렉션에 대한 명입니다.
const projectId = 3;
// 위에서 확인한 프로젝트 아이디를 입력합니다.
const _edtionSize = 30;
// 해당 컬렉션의 작품 수 입니다. 해당 수 만큼 작품이 생성됩니다.
//===================================================================
//===================================================================

// 선택 사항 
//===================================================================
//===================================================================
const useBaseIpfs = false;
// Ipfs에 직접 사진 파일을 올릴지 설정합니다.
const ipfsCID = "QmQU1DXv8nWoWhkqLwPpZSEenEAnPtRFypcDjAopYRq7Eg";
// 사진 파일이 담긴 Ipfs 폴더 CID 입니다. 
const baseIpfsUrl = `ipfs://${ipfsCID}`;
//따로 설정하지 않으셔도 됩니다.
//===================================================================
//===================================================================


// 필수 설정 사항 
//===================================================================
//===================================================================
const layerConfigurations = [
  {
    growEditionSizeTo: _edtionSize,
    // layersOrder에 레이어 폴더 순서대로 입력합니다.
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

// format을 설정합니다.
const format = {
  //넓이 입니다.
  width: 512,
  //높이 입니다.
  height: 512,
  smoothing: false,
};

//픽셀 이미지 생성시 필요한 값입니다. 
const _ratio = 10
// 위 값이 작을 수록 더 많이 픽셀화 됩니다.
const pixelFormat = {
  ratio: _ratio / 128,
};

// 추가 메타데이터를 설정합니다. 
const extraMetadata = {
//설정하지 않을 시 아래 내용을 지워주세요
  external_url: "https://example.com",
  youtube_url: "https://youtube.com",
  creator: "ArtKonnection",
//여기 까지 입니다.
};
//===================================================================
//===================================================================


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
  useBaseIpfs,
  description,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  baseIpfsUrl,
  debugLogs,
  extraMetadata,
  pixelFormat,
  namePrefix,
  projectId,
};
