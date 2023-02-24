const { ethers, upgrades } = require("hardhat");
async function main() {
  const VLFIDexInstance = await ethers.getContractFactory("VLFIDex");
  const VLFIDexContract = await VLFIDexInstance.deploy();
  console.log("VLFIDex Contract is deployed to:", VLFIDexContract.address);
}

main();
