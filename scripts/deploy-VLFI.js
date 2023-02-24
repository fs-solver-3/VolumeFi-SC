const { ethers, upgrades } = require("hardhat");
async function main() {
  const VolumeFiTokenInstance = await ethers.getContractFactory(
    "VolumeFiToken"
  );
  const VolumeFiTokenContract = await VolumeFiTokenInstance.deploy();
  console.log(
    "VolumeFiToken Contract is deployed to:",
    VolumeFiTokenContract.address
  );
}

main();
