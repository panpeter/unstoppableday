import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit'

export interface Post {
    id: string,
    date: string,
    title: string,
    link?: string,
    image?: string,
    description?: string,
    author: '0x0000',
    score: number
}

interface PostsState extends Array<Post> {
}

const initialState: PostsState = [
    {
        id: '1',
        date: '2022-04-24',
        title: 'Market Wrap: Cryptos Slip as Bitcoin Struggles to Hold $40K',
        link: 'https://unstoppableday.io/',
        score: 23,
        author: '0x0000',
    },
    {
        id: '2',
        date: '2022-04-24',
        title: 'CZ\'s Open Response to the Journalists from Reuters',
        description: 'CZ Binance tweeted a link containing Binance\'s open response to the inaccurate article published by the irresponsible journalists from Reuters',
        author: '0x0000',
        score: 21,
    },
    {
        id: '3',
        date: '2022-04-24',
        title: 'Scaramucci\'s SkyBridge Starts Fund for Bitcoin Mining',
        image: 'https://via.placeholder.com/300',
        author: '0x0000',
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
            prepare(date, title, link, image, description) {
                const post: Post = {
                    id: nanoid(),
                    date: date,
                    title: title,
                    link: link,
                    image: image,
                    description: description,
                    author: '0x0000',
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