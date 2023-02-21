# Boot Camp Bridge Contract

This contract based on Custodial Bridge Model and used Hardhat builder.

## 1. Unit testing method

Run the following command in terminal <br/>
`npx hardhat node` <br/>
Open the new tab in termianl and run the following command <br/>
`npx hardhat test` <br/>

## 2. Deploy method

Copy secrets-sample.json and rename secrets.json and fill out the items.<br/>
privateKey, apiKey, infuraKey, custodialWallet<br/>

Run the following command. <br/>
`npx hardhat run scripts/deploy-BootCampBridge.js`

For the testnet, add `--network rinkeby`

# Background

Pre-defined the Chain Id by own convention.<br/>
Make all the Chain Id to unique `uint8` data type because real Chain Id includes both `uint` and `string`.<br/>

`1` : Solana Chain net.<br/>
`2` : Ethereum Chain net.<br/>
