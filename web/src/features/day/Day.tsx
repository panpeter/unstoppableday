import React from 'react';
import {PostsList} from '../posts/PostsList';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";
import {CreatePostButton} from "../posts/CreatePostButton";

export function Day() {
    const params = useParams<keyof RouteParams>() as RouteParams
    const date = params.date

    return (
        <React.Fragment>
            <CreatePostButton/>
            <PostsList date={date}/>
        </React.Fragment>
    );
}
