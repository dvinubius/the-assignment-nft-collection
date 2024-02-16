// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract DummyNFT is ERC721Enumerable {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) { }

    function mint(address to, uint256 tokenId) public {
        _mint(to, tokenId);
    }

    /**
     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty
     * by default, can be overridden in child contracts.
     */
    function _baseURI() internal view override virtual returns (string memory) {
        return "https://dummynfts.vercel.app/api/token/";
    }
}
