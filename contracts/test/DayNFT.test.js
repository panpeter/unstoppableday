const chai = require("chai")
const { solidity } = require("ethereum-waffle")
chai.use(solidity)
const { expect } = chai

describe("DayNFT contract", function () {

    const DAY_PRICE = ethers.utils.parseEther("7")

    let dayNFTContract
    let owner

    beforeEach(async function () {
        const dayNFTContractFactory = await ethers.getContractFactory("DayNFT")
        dayNFTContract = await dayNFTContractFactory.deploy()

        let signers = await ethers.getSigners()
        owner = signers[0]
    })

    it("cannot mint when mint is not active", async function () {
        await expect(dayNFTContract.mint(20220202, { value: DAY_PRICE })).to.be.revertedWith("Mint is not active")
    })

    it("cannot mint date below 10101", async function () {
        await dayNFTContract.setMintActive(true)
        await expect(dayNFTContract.mint(0, { value: DAY_PRICE })).to.be.revertedWith("Date must be at least 10101 (0001-01-01)")
        await expect(dayNFTContract.mint(10100, { value: DAY_PRICE })).to.be.revertedWith("Date must be at least 10101 (0001-01-01)")
    })

    it("cannot mint when value is not enough", async function () {
        await dayNFTContract.setMintActive(true)
        await expect(dayNFTContract.mint(20220205, { value: DAY_PRICE.sub(1) })).to.be.revertedWith("Not enough MATIC sent")
    })

    it("can withdraw", async function () {
        await dayNFTContract.setMintActive(true)
        await dayNFTContract.mint(20220202, { value: DAY_PRICE })

        let address = owner.address
        let ownerBalance = await ethers.provider.getBalance(address)
        let tx = await dayNFTContract.withdraw()
        let rc = await tx.wait()

        let expected = ownerBalance.add(DAY_PRICE).sub(rc.gasUsed.mul(rc.effectiveGasPrice))
        let newBalance = await ethers.provider.getBalance(address)

        expect(newBalance).to.equal(expected)
    })

    it("returns correct token uri for current-ish date", async function () {
        await dayNFTContract.setMintActive(true)
        await dayNFTContract.mint(20220202, { value: DAY_PRICE })

        let dayUri = await dayNFTContract.tokenURI(20220202)
        // 29 = length of "data:application/json;base64,"
        let dayJsonString = Buffer.from(dayUri.substring(29), "base64").toString()
        let dayJson = JSON.parse(dayJsonString)

        expect(dayJson.name).to.equal("Day 2022-02-02")
        expect(dayJson.description).to.equal("Day 2022-02-02")

        let imageUri = dayJson.image
        // 26 = length of "data:image/svg+xml;base64,"
        let imageString = Buffer.from(imageUri.substring(26), "base64").toString()

        expect(imageString).to.contain('font-size="48"')
        expect(imageString).to.contain(">2022-02-02<")
    })

    it("returns correct token uri for old date", async function () {
        await dayNFTContract.setMintActive(true)
        await dayNFTContract.mint(10101, { value: DAY_PRICE })

        let dayUri = await dayNFTContract.tokenURI(10101)
        // 29 = length of "data:application/json;base64,"
        let dayJsonString = Buffer.from(dayUri.substring(29), "base64").toString()
        let dayJson = JSON.parse(dayJsonString)

        expect(dayJson.name).to.equal("Day 1-01-01")
        expect(dayJson.description).to.equal("Day 1-01-01")

        let imageUri = dayJson.image
        // 26 = length of "data:image/svg+xml;base64,"
        let imageString = Buffer.from(imageUri.substring(26), "base64").toString()

        expect(imageString).to.contain('font-size="68"')
        expect(imageString).to.contain(">1-01-01<")
    })

    it("returns correct token uri for big date", async function () {
        await dayNFTContract.setMintActive(true)
        await dayNFTContract.mint(20000020202, { value: DAY_PRICE })

        let dayUri = await dayNFTContract.tokenURI(20000020202)
        // 29 = length of "data:application/json;base64,"
        let dayJsonString = Buffer.from(dayUri.substring(29), "base64").toString()
        let dayJson = JSON.parse(dayJsonString)

        expect(dayJson.name).to.equal("Day 2000002-02-02")
        expect(dayJson.description).to.equal("Day 2000002-02-02")

        let imageUri = dayJson.image
        // 26 = length of "data:image/svg+xml;base64,"
        let imageString = Buffer.from(imageUri.substring(26), "base64").toString()

        expect(imageString).to.contain('font-size="36"')
        expect(imageString).to.contain(">2000002-02-02<")
    })
})