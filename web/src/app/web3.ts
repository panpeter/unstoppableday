import Web3 from "web3";
import dayNFTContractABI from "./dayNFTContractABI";
import {Contract} from 'web3-eth-contract';

const dayNFTContractAddress = "0x8bA8bd39c44034BD32296d84F908545F012A16Db"

let dayNFTContract: Contract

export const web3 = new Web3("wss://polygon-mainnet.g.alchemy.com/v2/O44Z1aBU5c0jbQCLGLXxkGA9C2sGAvCf");
export const provideDayNFTContract = async () => {
    if (!dayNFTContract) {
        dayNFTContract = await new web3.eth.Contract(dayNFTContractABI, dayNFTContractAddress)
    }
    return dayNFTContract
}
