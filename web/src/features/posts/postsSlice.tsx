import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit'

export interface Post {
    id: string,
    date: string,
    title: string,
    content: string,
    image?: string,
    score: number
}

interface PostsState extends Array<Post> {
}

const initialState: PostsState = [
    {
        id: '1',
        date: '2022-04-24',
        title: 'Market Wrap: Cryptos Slip as Bitcoin Struggles to Hold $40K',
        content: 'BTC declined as much as 4% over the past 24 hours, compared with a 2% dip in ETH.',
        score: 23,
    },
    {
        id: '2',
        date: '2022-04-24',
        title: 'CZ\'s Open Response to the Journalists from Reuters',
        content: 'CZ Binance tweeted a link containing Binance\'s open response to the inaccurate article published by the irresponsible journalists from Reuters',
        score: 21,
    },
    {
        id: '3',
        date: '2022-04-24',
        title: 'Scaramucci\'s SkyBridge Starts Fund for Bitcoin Mining',
        content: 'Skybridge Capital, the investment firm founded by financier and former Donald Trump aide Anthony Scaramucci, started a new investment vehicle, to invest in bitcoin mining, according to a U.S. Securities and Exchange Commission (SEC) filing.',
        image: 'https://via.placeholder.com/300',
        score: 19,
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload)
            },
            prepare(date, title, content, image) {
                const post: Post = {
                    id: nanoid(),
                    date: date,
                    title: title,
                    content: content,
                    image: image,
                    score: 0
                }

                return {
                    payload: post
                }
            }
        }
    }
})

export const {postAdded} = postsSlice.actions

export default postsSlice.reducer