require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');

const { alchemyApiKey, mnemonic } = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
      rinkeby: {
        url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
        accounts: {mnemonic: mnemonic}
      }
  },
};

