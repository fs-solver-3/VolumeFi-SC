const { ethers, upgrades } = require("hardhat");
async function main() {
  const VolumeTokenInstance = await ethers.getContractFactory("VolumeToken");
  const VolumeTokenContract = await VolumeTokenInstance.deploy();
  console.log(
    "VolumeToken Contract is deployed to:",
    VolumeTokenContract.address
  );
}

main();
