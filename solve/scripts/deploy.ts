import { ethers } from "hardhat";

async function main() {
  const coinFlipAttack = await ethers.deployContract("CoinFlipAttack")
  await coinFlipAttack.waitForDeployment();

  console.log(coinFlipAttack.target)

  const telephoneAttack = await ethers.deployContract("TelephoneAttack")
  await telephoneAttack.waitForDeployment();

  console.log(telephoneAttack.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
