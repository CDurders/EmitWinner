// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

interface IWinner {
    function attempt() external;
}

contract ExternalWinner {
    address winnerAddress = 0x608bcB084b4eD6E8A70962FDDb20c7884CD4eA6a;
    IWinner winnerContract;

    constructor() {
        winnerContract = IWinner(winnerAddress);
    }

    function callAttempt() external {
        winnerContract.attempt();
    }
}