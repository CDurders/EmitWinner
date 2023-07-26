// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const WINNER_ADDRESS = "0x608bcB084b4eD6E8A70962FDDb20c7884CD4eA6a";
const EXTERNAL_WINNER_ADDRESS = "0xfd5B871bC72173D86e821f9a353079EfcaaAeA76";

async function main() {
  const externalWinner = await hre.ethers.getContractAt("ExternalWinner", EXTERNAL_WINNER_ADDRESS);
  const tx = await externalWinner.callAttempt();
  const receipt = await tx.wait();

  console.log(receipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
