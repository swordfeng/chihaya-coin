pragma solidity ^0.8.20;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract ChihayaCoin is ERC20Upgradeable {
    function initialize() initializer public {
        __ERC20_init("Chihaya Coin", "CHY");
        _mint(msg.sender, 72000000000000000000000000); // 72 million * 10 ^ 18
    }

    function _chihaya(uint256 amount) internal pure returns (bool) {
        while (amount != 0) {
            if (amount % 100 == 72) {
                return true;
            }
            amount = amount / 10;
        }
        return false;
    }

    function _update(address from, address to, uint256 amount) internal virtual override {
        require(to == address(0) || amount == 0 || !_chihaya(amount), "Chihaya: \u304f\u3063\uff01");
        super._update(from, to, amount);
    }

    event Message(address indexed sender, string text);

    function message(string memory text) public virtual {
        emit Message(_msgSender(), text);
    }
}