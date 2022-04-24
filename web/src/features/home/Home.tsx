import React from 'react';
import {PostsList} from '../posts/PostsList';
import {CreatePostButton} from "../posts/CreatePostButton";
import {DayTitle} from "../day/DayTitle";
import {formatISO, startOfToday, startOfYesterday} from "date-fns";

export function Home() {
    const today = formatISO(startOfToday(), { representation: 'date' })
    const yesterday = formatISO(startOfYesterday(), { representation: 'date' })

    return (
        <React.Fragment>
            <CreatePostButton/>
            <DayTitle date={today}/>
            <PostsList date={today}/>
            <DayTitle date={yesterday}/>
            <PostsList date={yesterday}/>
        </React.Fragment>
    );
}
