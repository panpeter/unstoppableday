import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setDate} from "./daySlice";
import {truncateAddress} from "../../app/web3";

export function DayHeader() {
    const params = useParams<keyof RouteParams>() as RouteParams;
    const date = params.date;
    const dispatch = useAppDispatch();

    const owner = useAppSelector(state => state.day.owner)
    const ownerFetched = useAppSelector(state => state.day.ownerFetched)

    useEffect(() => {
        dispatch(setDate(date));
    }, [dispatch, date]);

    let ownerInfo
    if (ownerFetched) {
        if (owner) {
            ownerInfo = <p>Owned by <a href='#'>{truncateAddress(owner!)}</a></p>
        } else {
            ownerInfo = <p><a href='#'>Mint</a></p>
        }
    } else {
        ownerInfo = <p>&nbsp;</p>
    }

    return (
        <React.Fragment>
            <h1>Day {date}</h1>
            {ownerInfo}
        </React.Fragment>
    );
}
