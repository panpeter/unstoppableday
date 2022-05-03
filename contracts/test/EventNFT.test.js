const chai = require("chai")
const { solidity } = require("ethereum-waffle")
const {defaultSolcOutputSelection} = require("hardhat/internal/core/config/default-config");
chai.use(solidity)
const { expect } = chai

describe("EventNFT contract", function () {
    let eventNFTContract
    let owner

    beforeEach(async function () {
        const eventNFTContractFactory = await ethers.getContractFactory("EventNFT")
        eventNFTContract = await eventNFTContractFactory.deploy()

        let signers = await ethers.getSigners()
        owner = signers[0]
    })

    it("can mint new event", async function () {
        await eventNFTContract.mint(20200101, "title", "description", "image.url")
        let event = await eventNFTContract.getEvent("1")

        expect(event.title).to.equal("title")
    })
})