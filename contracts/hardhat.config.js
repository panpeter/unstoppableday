/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config()
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")

const { 
    POLYGON_MUMBAI_API_URL, 
    POLYGON_MAINNET_API_URL,
    POLYGON_MUMBAI_PRIVATE_KEY,
    POLYGON_MAINNET_PRIVATE_KEY,
    POLYGONSCAN_KEY,
} = process.env;

module.exports = {
    solidity: {
        version: "0.8.1",
        settings: {
            optimizer: {
                enabled: true,
                runs: 999,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: { },
        polygon_mumbai: {
            chainId: 80001,
            url: POLYGON_MUMBAI_API_URL,
            accounts: [`0x${POLYGON_MUMBAI_PRIVATE_KEY}`]
         },
         polygon_mainnet: {
            url: POLYGON_MAINNET_API_URL,
            accounts: [`0x${POLYGON_MAINNET_PRIVATE_KEY}`]
         }
    },
    etherscan: {
        apiKey: POLYGONSCAN_KEY,
    },
}
