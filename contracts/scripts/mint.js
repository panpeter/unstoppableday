const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");

const CONTRACT_ADDRESS = ""
const NFT_ID = 0

async function main() {
    const [account] = await ethers.getSigners()
    const dayNFTContract = await getContractAt(hre, "DayNFT", CONTRACT_ADDRESS, account)
    await dayNFTContract.setMintActive(true, {
        gasLimit: 500_000,
    })
    const transactionResponse = await dayNFTContract.mint(NFT_ID, {
        gasLimit: 500_000,
        value: ethers.utils.parseEther("7")
    })

    console.log(transactionResponse)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })