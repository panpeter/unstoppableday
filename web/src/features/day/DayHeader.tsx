import React from 'react';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";

export function DayHeader() {
    const params = useParams<keyof RouteParams>() as RouteParams
    const date = params.date

    return (
        <h1>Day {date}</h1>
    );
}
