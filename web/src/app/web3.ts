import Web3 from "web3";
import dayNFTContractABI from "./dayNFTContractABI";

const dayNFTContractAddress = "0x8bA8bd39c44034BD32296d84F908545F012A16Db"

export const web3 = new Web3("wss://polygon-mainnet.g.alchemy.com/v2/O44Z1aBU5c0jbQCLGLXxkGA9C2sGAvCf");
export const dayNFTContract = new web3.eth.Contract(dayNFTContractABI, dayNFTContractAddress);
export const truncateAddress = (address: string) => address.substring(0, 6) + "…" + address.substring(38);
