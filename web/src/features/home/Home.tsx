import React from 'react';
import {PostsList} from '../posts/PostsList';
import {CreatePostButton} from "../posts/CreatePostButton";

export function Home() {
    const date = '2022-04-24'

    return (
        <React.Fragment>
            <CreatePostButton/>
            <PostsList date={date}/>
        </React.Fragment>
    );
}
