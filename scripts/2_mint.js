const { wallet } = require("../config");
const { doLand } = require("./contracts");

async function main() {

  let tx;
  let tokenId = 1;
  let durationId = 1;
  let timeStamp = Date.now();
  let startTime = timeStamp;
  let endTime = Math.floor(timeStamp/1000 + 60);
  tx = await doLand().mint(tokenId,durationId,startTime,endTime,wallet.admin_address);
  console.log("mint tx.hash",tx.hash);
  await tx.wait();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });