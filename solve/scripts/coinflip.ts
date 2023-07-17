import { ethers } from "hardhat";

const CONTRACT_ADDRESS = ""
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("CoinFlip", CONTRACT_ADDRESS, signer)

  console.log(await contract.owner())

  //await signer.sendTransaction({to: CONTRACT_ADDRESS, value: 0.00001 * 10**18})

  console.log(await contract.owner())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
