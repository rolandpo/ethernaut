import { ethers } from "hardhat";

const CONTRACT_ADDRESS = ""
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("AlienCodex", CONTRACT_ADDRESS, signer)
  //const attackContract = await ethers.getContractAt("AlienCodexAttack", ATTACK_ADDRESS, signer)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
