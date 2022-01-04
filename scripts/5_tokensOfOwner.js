const { wellet } = require("../config");
const {  doREVVM, REVVM } = require("./contracts");

async function main() {

  let idArray = [];
  let total = await doREVVM().balanceOf(wellet.admin_address);
  console.log("total = " ,total);
  for (let index = 0; index < total; index++) {
    let id = await doREVVM().tokenOfOwnerByIndex(wellet.admin_address,index);
    idArray.push(id);
  }
  console.log("idArray:",idArray);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });