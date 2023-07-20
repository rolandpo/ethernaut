import { ethers } from "hardhat"
const hre = require("hardhat")

async function main() {
  const coinFlipAttack = await ethers.deployContract("CoinFlipAttack")
  await coinFlipAttack.waitForDeployment()

  console.log(coinFlipAttack.target)

  const telephoneAttack = await ethers.deployContract("TelephoneAttack")
  await telephoneAttack.waitForDeployment()

  console.log(telephoneAttack.target)

  const delegationAttack = await ethers.deployContract("DelegationAttack")
  await delegationAttack.waitForDeployment()

  console.log(delegationAttack.target)

  const forceAttack = await ethers.deployContract("ForceAttack", {value: ethers.parseEther("1")})
  await forceAttack.waitForDeployment()

  console.log(forceAttack.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
