const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let carTokenId = '57910179610855904350512198746766089094720102495044069356670909012675387196134';
  let tokenId = await getWNftId(carTokenId);
  let bool = await doREVVM().isValidNow(tokenId);
  console.log(tokenId," : ",bool);

  tokenId = 2;
  bool = await doREVVM().isValidNow(tokenId);
  console.log(tokenId," : ",bool);

  let user = await doREVVM().getUser(1);
  console.log(tokenId,".user : ",user);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });