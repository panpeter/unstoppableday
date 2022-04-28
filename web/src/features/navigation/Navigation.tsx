import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {checkWallet, ConnectionState, connectWallet, disconnectWallet} from "../wallet/walletSlice";
import {truncateAddress} from "../../app/web3";

export function Navigation() {
    const connectionState = useAppSelector(state => state.wallet.connectionState)
    const walletAddress = useAppSelector(state => state.wallet.address)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (connectionState === ConnectionState.Disconnected) {
            dispatch(checkWallet())
        }
    }, [connectionState, dispatch])

    // TODO change connecting link to a button?
    const connectLink = () => {
        if (connectionState === ConnectionState.Connected) {
            return <a onClick={() => dispatch(disconnectWallet())}>{truncateAddress(walletAddress!)}</a>
        } else if (connectionState === ConnectionState.Connecting) {
            return <a href={"#"}>Connecting...</a>
        } else {
            return <a onClick={() => dispatch(connectWallet())}>Connect</a>
        }
    }

    const latestLink = <NavLink
        to="/"
        className={({isActive}) => (isActive ? styles.current : '')}
    >Latest</NavLink>

    const upcomingLink = <NavLink
        to="/upcoming"
        className={({isActive}) => (isActive ? styles.current : '')}
    >Upcoming</NavLink>

    const dayLink = <NavLink
        to="/day"
        className={({isActive}) => (isActive ? styles.current : '')}
    >Pick a Day</NavLink>

    const newLink = <NavLink
        to="/new"
        className={({isActive}) => (isActive ? styles.current : '')}
    >Create Post</NavLink>

    return (
        <nav>
            {latestLink}
            {' '}
            {upcomingLink}
            {' '}
            {dayLink}
            {' '}
            {newLink}
            {' '}
            {connectLink()}
        </nav>
    );
}
