require('dotenv').config();
// const { BigNumber } = require("ethers");
const { ethers } = require('hardhat');

async function main() {
  const DmgkToken = await ethers.getContractFactory("DarkMAGICK");
  const DmgkTokenContract = await DmgkToken.deploy();

  console.log("DmgkToken address", DmgkTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });