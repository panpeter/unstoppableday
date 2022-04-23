import {createSlice} from '@reduxjs/toolkit'

export interface Post {
    id: string,
    title: string,
    content: string,
    image?: string,
    score: number
}

interface PostsState extends Array<Post>{}

const initialState: PostsState = [
    {
        id: '1',
        title: 'Where does it come from?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        score: 23,
    },
    {
        id: '2',
        title: 'Where does it come from?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        score: 21,
    },
    {
        id: '2',
        title: 'Where does it come from?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
        image: 'https://via.placeholder.com/300',
        score: 21,
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer