// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";

contract DayNFT is ERC721Enumerable, Ownable {
    uint256 public constant MAX_MINTS_PER_ADDRESS = 3;
    uint256 internal constant MIN_DATE = 10101; // 0001-01-01
    
    bool public isMintActive = false;
    mapping(address => uint256) private _mintsCount;

    constructor() ERC721("DayNFT", "DAY") {}

    function setMintActive(bool active) external onlyOwner {
        isMintActive = active;
    }

    function mint(uint256 date) public {
        require(isMintActive, "Mint is not active");
        require(date >= MIN_DATE, "Date must be at least 10101 (0001-01-01)");
        require(
            _mintsCount[_msgSender()] < MAX_MINTS_PER_ADDRESS,
            "One address can mint max 3 days"
        );
        
        _mintsCount[_msgSender()] = _mintsCount[_msgSender()] + 1;
        _safeMint(_msgSender(), date);
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override
        returns (string memory)
    {
        string memory dateString = toDateString(tokenId);
        string memory svgData = getSvg(dateString);
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Date ',
                        dateString,
                        '", "description": "Date ',
                        dateString,
                        '", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svgData)),
                        '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function getSvg(string memory date) internal pure returns (string memory) {
        uint256 fontSize = 48 * 10 / bytes(date).length;
        return
            string(
                abi.encodePacked(
                    "<svg width='320' height='320'>",
                    "<rect width='320' height='320' fill='#000'/>",
                    "<text x='50%' y='50%' dominant-baseline='middle' font-size='",
                    toString(fontSize),
                    "' font-family='monospace' text-anchor='middle' fill='#fff'>",
                    date,
                    "</text>",
                    "</svg>"
                )
            );
    }

    // Inspired by OraclizeAPI's implementation - MIT license
    // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol
    function toString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    function toDateString(uint256 date) internal pure returns (string memory) {
        uint256 temp = date;
        uint256 chars;
        while (temp != 0) {
            chars++;
            temp /= 10;
        }
        chars += 2; // two '-' chars.
        uint256 totalChars = chars;
        bytes memory buffer = new bytes(chars);
        while (date != 0) {
            chars -= 1;
            if (chars == totalChars - 3 || chars == totalChars - 6) {
                buffer[chars] = '-';    
            } else {
                buffer[chars] = bytes1(uint8(48 + uint256(date % 10)));
                date /= 10;
            }
        }
        return string(buffer);
    }
}
