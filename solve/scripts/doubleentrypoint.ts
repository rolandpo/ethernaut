import { ethers } from "hardhat";
import { attack } from "../typechain-types/contracts";

const CONTRACT_ADDRESS = "0x12300cc4b778feF85Db771525D76562515882953"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("DoubleEntryPoint", CONTRACT_ADDRESS, signer)
  //const attackContract = await ethers.getContractAt("DoubleEntryPointAttack", ATTACK_ADDRESS, signer)
  const forta = await ethers.getContractAt("Forta", CONTRACT_ADDRESS, signer)

  console.log(await contract.cryptoVault())
  await forta.setDetectionBot("0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb")

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
