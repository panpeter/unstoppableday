import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch, AppThunk, RootState} from "../../app/store";
import {dayNFTContract} from "../../app/web3";

interface DayOwner {
    day: string,
    owner?: string
}

interface DayState {
    date?: string,
    ownerFetched: boolean
    owner?: string
}

const initialState: DayState = {
    date: undefined,
    ownerFetched: false,
    owner: undefined,
}

export const setDate = (
    day: string
): AppThunk => async (
    dispatch: AppDispatch,
    getState: () => RootState
) => {
    if (getState().day.date == day) return

    dispatch(dayChanged(day))

    const tokenId = day.replaceAll("-", "")
    let owner
    try {
        owner = await dayNFTContract.methods.ownerOf(tokenId).call()
    } catch (e) {
        owner = null
    }

    dispatch(ownerFetched({
        day: day,
        owner: owner,
    }))
}

const daySlice = createSlice({
    name: 'day',
    initialState,
    reducers: {
        dayChanged: (state, action: PayloadAction<string>) => {
            state.date = action.payload
            state.ownerFetched = false
            delete state.owner
        },
        ownerFetched: (state, action: PayloadAction<DayOwner>) => {
            const dayOwner = action.payload
            if (state.date == dayOwner.day) {
                state.owner = dayOwner.owner
                state.ownerFetched = true
            }
        }
    },
})

export const {dayChanged, ownerFetched} = daySlice.actions

export default daySlice.reducer