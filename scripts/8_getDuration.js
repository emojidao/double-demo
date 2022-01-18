const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let tokenId = 1;
  let idList = await doREVVM().getDurationIdList(tokenId);
  console.log("idList : ",idList);

  let duration = await doREVVM().getDuration(1);
  console.log("duration : ",duration);

  duration = await doREVVM().getDurationByIndex(tokenId,0);
  console.log("duration : ",duration);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });