const {  doLand } = require("./contracts");

async function main() {

  let tokenId = 2;
  let info = await doLand().getDoNftInfo(tokenId);
  let user = await doLand().getUser(info.oid);
  console.log(tokenId,".user : ",user);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });