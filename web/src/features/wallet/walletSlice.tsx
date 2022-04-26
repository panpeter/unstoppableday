import {createSlice} from '@reduxjs/toolkit'

interface WalletState {
    connected: Boolean
}

const initialState: WalletState = {
    connected: false
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        connect(state: WalletState) {
            state.connected = true
        },
        disconnect(state: WalletState) {
            state.connected = false
        }
    }
})

export const {connect, disconnect} = walletSlice.actions

export default walletSlice.reducer