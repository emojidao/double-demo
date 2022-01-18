const {  doLand } = require("./contracts");

async function main() {

  let landId = '340282366920938463463374607431768211458';
  let tokenId = await doLand().getXNftId(landId);
  let bool = await doLand().isValidNow(tokenId);
  console.log(tokenId.toString()," : ",bool);

  tokenId = 2;
  bool = await doLand().isValidNow(tokenId);
  console.log(tokenId," : ",bool);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });