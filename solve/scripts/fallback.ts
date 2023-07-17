import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Fallback", CONTRACT_ADDRESS, signer)

  //console.log(await contract.owner())

  //await signer.sendTransaction({to: CONTRACT_ADDRESS, value: 0.00001 * 10**18})

  await contract.withdraw()

  console.log(await contract.owner())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
