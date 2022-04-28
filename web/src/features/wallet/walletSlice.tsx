import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch} from "../../app/store";
import {web3} from "../../app/web3";

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

export const connectWallet = () => {
    return async (dispatch: AppDispatch) => {
        // TODO warn window.ethereum is null
        dispatch(connecting())

        // Switch to Polygon.
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: web3.utils.toHex(137)}],
        });

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })

        dispatch(connected(accounts))
    }
}

export const disconnectWallet = () => {
    return async (dispatch: AppDispatch) => {
        // TODO
    }
}

export const checkWallet = () => {
    return async (dispatch: AppDispatch) => {
        if (window.ethereum.networkVersion === 137) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })
            dispatch(connected(accounts))
        } else {
            return [];
        }
    }
}

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
            // TODO Handle error.
        },
        connecting: (state) => {
            state.connectionState = ConnectionState.Connecting
        },
        connected: (state, action: PayloadAction<Array<string>>) => {
            const accounts = action.payload
            if (accounts.length > 0) {
                state.connectionState = ConnectionState.Connected
                state.address = accounts[0]
            } else {
                state.connectionState = ConnectionState.Disconnected
                delete state.address
            }
        }
    },
})

export const {accountsChanged, disconnected, connecting, connected} = walletSlice.actions

export default walletSlice.reducer