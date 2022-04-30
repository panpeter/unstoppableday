import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {RouteParams} from "./RouteParams";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {mint, setDate} from "./daySlice";
import {truncateAddress} from "../../app/web3";

export function DayHeader() {
    const params = useParams<keyof RouteParams>() as RouteParams;
    const date = params.date;
    const dispatch = useAppDispatch();

    const owner = useAppSelector(state => state.day.owner)
    const mintStatus = useAppSelector(state => state.day.mintStatus)
    const dayLink = useAppSelector(state => state.day.link)

    useEffect(() => {
        dispatch(setDate(date));
    }, [dispatch, date]);

    let ownerInfo
    if (mintStatus == 'unknown') {
        ownerInfo = <p>&nbsp;</p>
    } else if (mintStatus == 'minting') {
        ownerInfo = <p>Minting...</p>
    } else if (mintStatus == 'not_minted') {
        ownerInfo = <p><a onClick={() => dispatch(mint(date))}>Mint</a></p>
    } else if (mintStatus == 'minted') {
        ownerInfo = <p>Owned by <a target="_blank" href={dayLink}>{truncateAddress(owner!)}</a></p>
    }

    return (
        <React.Fragment>
            <h1>Day {date}</h1>
            {ownerInfo}
        </React.Fragment>
    );
}
