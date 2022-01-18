const {  doLand } = require("./contracts");

async function main() {

  let tokenId = 2;
  let idList = await doLand().getDurationIdList(tokenId);
  console.log("idList : ",idList);

  let duration = await doLand().getDuration(1);
  console.log("duration : ",duration);

  duration = await doLand().getDurationByIndex(tokenId,0);
  console.log("duration : ",duration);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });