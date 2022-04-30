import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch, AppThunk, RootState} from "../../app/store";
import {dayNFTContract, dayNFTContractAddress, dayNFTPrice, web3} from "../../app/web3";
import {EventData} from "web3-eth-contract";

dayNFTContract.events.Transfer(
    {fromBlock: "latest"}
).on(
    'data',
    (event: EventData) => handleTransferEvent(event)
)

type MintStatus = 'unknown' | 'not_minted' | 'minting' | 'minted'

interface DayOwner {
    day: string,
    owner?: string
}

interface DayState {
    date?: string,
    mintStatus: MintStatus,
    owner?: string,
    link?: string,
}

const initialState: DayState = {
    date: undefined,
    mintStatus: 'unknown',
    owner: undefined,
    link: undefined,
}

const parseTokenId = (date: string) => date.replaceAll("-", "")

export const handleTransferEvent = (
    event: EventData
): AppThunk => async (
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    const currentDate = getState().day.date
    if (!currentDate) return

    const tokenId = parseTokenId(currentDate)

    if (event.returnValues.tokenId !== tokenId) return

    dispatch(ownerFetched({
        day: currentDate,
        owner: event.returnValues.to,
    }))
}

export const setDate = (
    day: string
): AppThunk => async (
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    if (getState().day.date === day) return

    dispatch(dayChanged(day))

    const tokenId = parseTokenId(day)
    let owner: string | undefined
    try {
        owner = await dayNFTContract.methods.ownerOf(tokenId).call()
    } catch (e) {
        owner = undefined
    }

    dispatch(ownerFetched({
        day: day,
        owner: owner,
    }))
}

export const mint = (
    day: string
): AppThunk => async (
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    dispatch(mintStarted())

    const tokenId = parseTokenId(day)
    const transactionParameters = {
        to: dayNFTContractAddress,
        from: window.ethereum.selectedAddress,
        value: web3.utils.toHex(dayNFTPrice),
        data: dayNFTContract.methods.mint(tokenId).encodeABI()
    }

    try {
        await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
    } catch (error) {
        dispatch(mintFailed(error.message))
    }
}

const daySlice = createSlice({
    name: 'day',
    initialState,
    reducers: {
        dayChanged: (state, action: PayloadAction<string>) => {
            state.date = action.payload
            state.mintStatus = 'unknown'
            const tokenId = parseTokenId(action.payload)
            state.link = `https://opensea.io/assets/matic/${dayNFTContractAddress}/${tokenId}`
            delete state.owner
        },
        ownerFetched: (state, action: PayloadAction<DayOwner>) => {
            const dayOwner = action.payload
            if (state.date === dayOwner.day) {
                state.owner = dayOwner.owner
                state.mintStatus = dayOwner.owner ? 'minted' : 'not_minted'
            }
        },
        mintStarted: (state) => {
            state.mintStatus = 'minting'
        },
        mintFailed: (state, action: PayloadAction<string>) => {
            state.mintStatus = 'not_minted'
        }
    },
})

export const {dayChanged, ownerFetched, mintStarted, mintFailed} = daySlice.actions

export default daySlice.reducer