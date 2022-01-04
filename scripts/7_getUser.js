const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let tokenId = 1;
  let info = await doREVVM().getDoNftInfo(tokenId);
  let user = await doREVVM().getUser(info.oid);
  console.log(tokenId,".user : ",user);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });