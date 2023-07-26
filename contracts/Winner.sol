//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Winner {
    event Win(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Win(msg.sender);
    }
}