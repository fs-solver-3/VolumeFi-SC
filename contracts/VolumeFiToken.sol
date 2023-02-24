// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VolumeFiToken is ERC20, Ownable {
    constructor() ERC20("VolumeToken", "VLFI") {}

    /**
     * @notice emit events.
     */
    event MintVLFIFinished(address account, uint256 amount);
    event BurnVLFIFinished(address account, uint256 amount);

    /**
     * @notice A method to mint.
     * @param _account mint address.
     * @param _amount mint amount.
     */
    function mint(address _account, uint256 _amount) public onlyOwner {
        _mint(_account, _amount);

        emit MintVLFIFinished(_account, _amount);
    }

    /**
     * @notice A method to burn.
     * @param _account burn address.
     * @param _amount burn amount.
     */
    function burn(address _account, uint256 _amount) public onlyOwner {
        _burn(_account, _amount);

        emit BurnVLFIFinished(_account, _amount);
    }
}
