const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let tx;
  let carTokenId = '57910179610855904350512198746766089094720102495044069356670909012675387196134';
  tx = await doREVVM().mintWNft(carTokenId);
  console.log("mintWNft  tx.hash",tx.hash);
  await tx.wait();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });