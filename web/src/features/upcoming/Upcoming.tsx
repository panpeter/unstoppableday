import React from 'react';
import {PostsList} from '../posts/PostsList';
import {CreatePostButton} from "../posts/CreatePostButton";
import {DayTitle} from "../day/DayTitle";
import {addDays, formatISO, startOfTomorrow} from "date-fns";

export function Upcoming() {
    const dates = []
    const tomorrow = startOfTomorrow()
    for (let i = 0; i < 7; i++) {
        const date =  formatISO(addDays(tomorrow, i), { representation: 'date' })
        dates.push(<DayTitle date={date}/>)
        dates.push(<PostsList date={date}/>)
    }

    return (
        <React.Fragment>
            <CreatePostButton/>
            {dates}
        </React.Fragment>
    );
}
