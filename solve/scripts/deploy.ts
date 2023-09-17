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

  const FACTORY_ADDRESS = "0x763e69d24a03c0c8B256e470D9fE9e0753504D07"

  const recoveryAttack = await ethers.deployContract("RecoveryAttack", [FACTORY_ADDRESS], signer)
  await recoveryAttack.waitForDeployment()

  console.log(recoveryAttack.target)

  const denialAttack = await ethers.deployContract("DenialAttack")
  await denialAttack.waitForDeployment()

  console.log(denialAttack.target)

  const SHOP_ADDRESS = "0xf0D7de80A1C242fA3C738b083C422d65c6c7ABF1"

  const shopAttack = await ethers.deployContract("ShopAttack", [SHOP_ADDRESS])
  await shopAttack.waitForDeployment()

  console.log(shopAttack.target)

  const DEX_ADDRESS = "0x449264284B572Ac8e066cD695b2ec4E9018dE1fE"

  const dexAttack = await ethers.deployContract("DexAttack", [DEX_ADDRESS], signer)
  await dexAttack.waitForDeployment()

  console.log(dexAttack.target)

  const DEX_TWO_ADDRESS = "0xe73bc5BD4763A3307AB5F8F126634b7E12E3dA9b"

  const dexTwoAttack = await ethers.deployContract("DexTwoAttack", [DEX_TWO_ADDRESS, "Rock", "ROCK", 10], signer)
  await dexTwoAttack.waitForDeployment()

  console.log(dexTwoAttack.target)

  const puzzleWalletAttack = await ethers.deployContract("PuzzleWalletAttack", signer)
  await puzzleWalletAttack.waitForDeployment()

  console.log(puzzleWalletAttack.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
