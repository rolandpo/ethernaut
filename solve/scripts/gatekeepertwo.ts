import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x0826223156fF61F9abf620D2f58A06177DA664Cc"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("GatekeeperTwo", CONTRACT_ADDRESS, signer)

  console.log(await contract.entrant())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
