import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xf0D7de80A1C242fA3C738b083C422d65c6c7ABF1"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Token", CONTRACT_ADDRESS, signer)

  console.log(await contract.totalSupply())
  console.log(await contract.balanceOf(PLAYER_ADDRESS))

  await contract.transfer("0xf0D7de80A1C242fA3C738b083C422d65c6c7ABF1", 21)

  console.log(await contract.totalSupply())
  console.log(await contract.balanceOf(PLAYER_ADDRESS))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
