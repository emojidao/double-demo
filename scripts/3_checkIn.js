const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let tx;
  let tokenId = 1;
  let durationId = 1;
  let to = "0xc3EbDdFdCeb4FCBF2c6bc534a291689ccBf2a8E3";// or other
  tx = await doREVVM().checkIn(to,tokenId,durationId);
  console.log("tx.hash",tx.hash);
  await tx.wait();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });