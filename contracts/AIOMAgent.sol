// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AIOMAgent {

    struct Agent {
        address owner;
        string name;
    }

    Agent[] public agents;

    function createAgent(string memory name) public {
        agents.push(Agent(msg.sender, name));
    }

    function getAgents() public view returns (Agent[] memory) {
        return agents;
    }
}
