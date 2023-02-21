require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");

const {
  privateKey,
  apiKey,
  infuraKey,
  ALCHEMY_API_KEY,
} = require("./secrets.json");

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  networks: {
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + infuraKey,
      gas: 10000000,
      accounts: [`0x${privateKey}`],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + infuraKey,
      gas: 10000000,
      accounts: [`0x${privateKey}`],
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${privateKey}`],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      gas: 10000000,
      accounts: [`0x${privateKey}`],
    },
    bscmain: {
      url: "https://bsc-dataseed.binance.org/",
      gas: 10000000,
      accounts: [`0x${privateKey}`],
    },
  },
  etherscan: {
    apiKey: apiKey,
    // apiKey: apiKeyBSC,
  },
};
task(
  "flat",
  "Flattens and prints contracts and their dependencies (Resolves licenses)"
)
  .addOptionalVariadicPositionalParam(
    "files",
    "The files to flatten",
    undefined,
    types.inputFile
  )
  .setAction(async ({ files }, hre) => {
    let flattened = await hre.run("flatten:get-flattened-sources", { files });

    // Remove every line started with "// SPDX-License-Identifier:"
    flattened = flattened.replace(
      /SPDX-License-Identifier:/gm,
      "License-Identifier:"
    );
    flattened = `// SPDX-License-Identifier: MIXED\n\n${flattened}`;

    // Remove every line started with "pragma experimental ABIEncoderV2;" except the first one
    flattened = flattened.replace(
      /pragma experimental ABIEncoderV2;\n/gm,
      (
        (i) => (m) =>
          !i++ ? m : ""
      )(0)
    );
    console.log(flattened);
  });
