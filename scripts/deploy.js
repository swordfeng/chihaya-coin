// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers, upgrades } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ChihayaCoin = await ethers.getContractFactory("ChihayaCoin");
  const chihayaCoin = await upgrades.deployProxy(ChihayaCoin);

  await chihayaCoin.deployed();

  console.log("chihayaCoin deployed to:", chihayaCoin.address);

  // Upgrading
  // const chihayaCoin = await upgrades.upgradeProxy('0x589545b917a4db56a7fd5cd28b6b7c53e0fb46a7', ChihayaCoin);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
