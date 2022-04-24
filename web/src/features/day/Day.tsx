import React from 'react';
import {PostsList} from '../posts/PostsList';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";

export function Day() {
    const params = useParams<keyof RouteParams>() as RouteParams
    const date = params.date

    return (
        <PostsList date={date} />
    );
}
