const {  doLand } = require("./contracts");
/**
 * Wrap model : mintWNFT = mintXNft
 * Virtual model : mintVNFT = mintXNft
 */
async function main() {

  let tx;
  //replace tokenId to your NFT tokenId
  let tokenId = '57910179610855904350512198746766089094720102495044069356670909012675387196134';
  tx = await doLand().mintXNft(tokenId);
  console.log("mintXNft  tx.hash",tx.hash);
  await tx.wait();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });