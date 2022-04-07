async function main() {
    const [deployer] = await ethers.getSigners()

    console.log(`Deploying contracts with the account: ${deployer.address}`)
    console.log(`Account balance: ${(await deployer.getBalance()).toString()}`)

    const contractFactory = await ethers.getContractFactory("DayNFT")
    const contract = await contractFactory.deploy()

    console.log(`Contract deployed to address: ${contract.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })