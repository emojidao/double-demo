const { wallet } = require("../config");
const {  doLand } = require("./contracts");

async function main() {

  let idArray = [];
  let total = await doLand().balanceOf(wallet.admin_address);
  console.log("total = " ,total.toString());
  for (let index = 0; index < total; index++) {
    let id = await doLand().tokenOfOwnerByIndex(wallet.admin_address,index);
    idArray.push(id.toString());
  }
  console.log("idArray:",idArray);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });