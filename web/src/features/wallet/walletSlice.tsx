import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import Web3 from "web3";

const web3 = new Web3("wss://polygon-mainnet.g.alchemy.com/v2/O44Z1aBU5c0jbQCLGLXxkGA9C2sGAvCf");
const dayNFTContractABI = [{ inputs: [], stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "approved", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "owner", type: "address" }, { indexed: !0, internalType: "address", name: "operator", type: "address" }, { indexed: !1, internalType: "bool", name: "approved", type: "bool" }], name: "ApprovalForAll", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "previousOwner", type: "address" }, { indexed: !0, internalType: "address", name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, internalType: "address", name: "from", type: "address" }, { indexed: !0, internalType: "address", name: "to", type: "address" }, { indexed: !0, internalType: "uint256", name: "tokenId", type: "uint256" }], name: "Transfer", type: "event" }, { inputs: [], name: "DAY_PRICE", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "approve", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "getApproved", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "address", name: "operator", type: "address" }], name: "isApprovedForAll", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "isMintActive", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "date", type: "uint256" }], name: "mint", outputs: [], stateMutability: "payable", type: "function" }, { inputs: [{ internalType: "address", name: "receiver", type: "address" }, { internalType: "uint256", name: "date", type: "uint256" }], name: "mintGift", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "ownerOf", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" }, { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }, { internalType: "bytes", name: "_data", type: "bytes" }], name: "safeTransferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "operator", type: "address" }, { internalType: "bool", name: "approved", type: "bool" }], name: "setApprovalForAll", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bool", name: "active", type: "bool" }], name: "setMintActive", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }], name: "supportsInterface", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" }, { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "index", type: "uint256" }], name: "tokenByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "owner", type: "address" }, { internalType: "uint256", name: "index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }], name: "tokenURI", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "pure", type: "function" }, { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" }, { inputs: [{ internalType: "address", name: "from", type: "address" }, { internalType: "address", name: "to", type: "address" }, { internalType: "uint256", name: "tokenId", type: "uint256" }], name: "transferFrom", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" }, { inputs: [], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" }]
const dayNFTContractAddress = "0x8bA8bd39c44034BD32296d84F908545F012A16Db"


export enum ConnectionState {
    Connecting = 'connecting',
    Connected = 'connected',
    Disconnected = 'disconnected',
}

interface WalletState {
    connectionState: ConnectionState,
    address?: string
}

const initialState: WalletState = {
    connectionState: ConnectionState.Disconnected,
}

// TODO warn window.ethereum is null
export const connectWallet = createAsyncThunk(
    'wallet/connect',
    async () => {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3.utils.toHex(137) }],
        });

        return await window.ethereum.request({
            method: "eth_requestAccounts",
        })
    }
);

// TODO check why this does not work?
export const disconnectWallet = createAsyncThunk(
    'wallet/disconnect',
    async () => {
        return await window.ethereum.currentProvider.disconnect();
    }
)

export const checkConnection = createAsyncThunk(
    'wallet/check',
    async () => {
        if (window.ethereum.networkVersion == 137) {
            return await window.ethereum.request({
                method: "eth_accounts",
            })
        } else {
            return [];
        }
    }
);

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        accountsChanged: (state, action: PayloadAction<Array<string>>) => {
            const accounts = action.payload
            if (accounts.length > 0) {
                state.connectionState = ConnectionState.Connected
                state.address = accounts[0]
            } else {
                state.connectionState = ConnectionState.Disconnected
                delete state.address
            }
        },
        disconnected: (state) => {
            state.connectionState = ConnectionState.Disconnected
            delete state.address
        },
    },
    extraReducers(builder) {
        builder
            .addCase(connectWallet.pending, (state) => {
                state.connectionState = ConnectionState.Connecting
            })
            .addCase(connectWallet.fulfilled, (state) => {
                state.connectionState = ConnectionState.Connected
                state.address = window.ethereum.selectedAddress
            })
            .addCase(connectWallet.rejected, (state) => {
                state.connectionState = ConnectionState.Disconnected
                delete state.address
                // Handle error.
            })
            .addCase(checkConnection.fulfilled, (state, action) => {
                const accounts = action.payload
                if (accounts.length > 0) {
                    state.connectionState = ConnectionState.Connected
                    state.address = window.ethereum.selectedAddress
                }
                // It's checkConnection fails, just keep connectionState disconnected.
            })
            .addCase(disconnectWallet.fulfilled, (state) => {
                state.connectionState = ConnectionState.Disconnected
                delete state.address
            })
    }
})

export const {accountsChanged, disconnected} = walletSlice.actions

export default walletSlice.reducer