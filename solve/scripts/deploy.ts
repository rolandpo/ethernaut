import { ethers } from "hardhat"
const hre = require("hardhat")

async function main() {
  /*const coinFlipAttack = await ethers.deployContract("CoinFlipAttack")
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

  const kingAttack = await ethers.deployContract("KingAttack")
  await kingAttack.waitForDeployment()

  console.log(kingAttack.target)

  const reentranceAttack = await ethers.deployContract("ReentranceAttack", {value: ethers.parseEther("0.001")})
  await reentranceAttack.waitForDeployment()

  console.log(reentranceAttack.target)

  const elevatorAttack = await ethers.deployContract("ElevatorAttack")
  await elevatorAttack.waitForDeployment()

  console.log(elevatorAttack.target)

  const gatekeeperOneAttack = await ethers.deployContract("GatekeeperOneAttack")
  await gatekeeperOneAttack.waitForDeployment()

  console.log(gatekeeperOneAttack.target)*/

  const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
  const signer = await ethers.getSigner(PLAYER_ADDRESS)

  /*const gatekeeperTwoAttack = await ethers.deployContract("GatekeeperTwoAttack", signer)
  await gatekeeperTwoAttack.waitForDeployment()

  console.log(gatekeeperTwoAttack.target)*/

  const PRESERVATION_ADDRESS = "0x8E8A3c0547c9A17F051D2E5CAf7E0e21C0719E1C"

  const preservationAttack = await ethers.deployContract("PreservationAttack", [PRESERVATION_ADDRESS], signer)
  await preservationAttack.waitForDeployment()

  console.log(preservationAttack.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
