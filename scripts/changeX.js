// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const CONTRACT_ADDRESS = "0x9ACD1D478cD5b39093EdC459E87E95e0A6c8B7ab";

async function main() {
  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDRESS);

  await contract.changeX(41);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
