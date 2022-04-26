import React from 'react';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";

export function DayHeader() {
    const params = useParams<keyof RouteParams>() as RouteParams
    const date = params.date

    return (
        <React.Fragment>
            <h1>Day {date}</h1>
            <p>Owned by <a href='#'>0x0000...0000</a></p>
        </React.Fragment>
    );
}
