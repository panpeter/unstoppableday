// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import "./Base64.sol";

contract EventNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    struct Event {
        uint256 id;
        uint256 day;
        string title;
        string description;
        string imageUrl;
    }

    // Id => Event
    mapping(uint256 => Event) private events;
    // Day id => Event
    mapping(uint256 => Event[]) private dayEvents;

    Counters.Counter private latestEventId;

    constructor() ERC721("Unstoppable Day Event NFT", "EVNT") {}

    function mint(
        uint256 day,
        string memory title,
        string memory description,
        string memory imageUrl
    ) external returns (uint256) {
        latestEventId.increment();
        uint256 eventId = latestEventId.current();
        Event memory _event = Event(eventId, day, title, description, imageUrl);
        events[eventId] = _event;
        dayEvents[day].push(_event);
        _safeMint(_msgSender(), eventId);

        return eventId;
    }

    function getEvent(uint256 tokenId)
    external
    view
    returns (Event memory)
    {
        return events[tokenId];
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
    {
        Event memory _event = events[tokenId];
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        _event.title,
                        '", "description": "',
                        _event.description,
                        '", "image": "',
                        _event.imageUrl,
                        '"}'
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }
}
