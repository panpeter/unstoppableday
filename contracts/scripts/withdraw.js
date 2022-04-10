const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");

const CONTRACT_ADDRESS = ""

async function main() {
    const [account] = await ethers.getSigners()
    const dayNFTContract = await getContractAt(hre, "DayNFT", CONTRACT_ADDRESS, account)
    const transactionResponse = await dayNFTContract.withdraw({
        gasLimit: 500_000,
    })

    console.log(transactionResponse)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })