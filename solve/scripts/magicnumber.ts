import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x56639dB16Ac50A89228026e42a316B30179A5376"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("MagicNum", CONTRACT_ADDRESS, signer)
  //const attackContract = await ethers.getContractAt("MagicNumAttack", ATTACK_ADDRESS, signer)

  const result = await signer.sendTransaction({from: PLAYER_ADDRESS, data: "0x600a600c600039600a6000f3602a60805260206080f3"})
  const hash = result.hash
  const receipt = await ethers.provider.getTransactionReceipt(hash)
  const address = receipt?.contractAddress
  console.log(receipt)
  console.log(address)
  if (address) await contract.setSolver(address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
