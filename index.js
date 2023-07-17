let collectionNFT = [];

function mintNFT(companyName, size, brand, debutYear) {
  const nft = {
    companyName: companyName,
    size: size,
    brand: brand,
    debutYear: debutYear,
  };
  collectionNFT.push(nft);
}

function listNFTs() {
  for (let i = 0; i < collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply() {
  return collectionNFT.length;
}

mintNFT("TechGear", "Medium", "InnovateX", 2019);
mintNFT("Louis Vuitton", "Large", "Louis Vuitton", 1854);
mintNFT("Herschel Supply Co", "Small", "Herschel", 2009);

listNFTs();

console.log("TOTAL NFT:", getTotalSupply());
