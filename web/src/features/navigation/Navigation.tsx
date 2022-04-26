import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {connect, disconnect} from "../wallet/walletSlice";

export function Navigation() {
    const walletConnected = useAppSelector(state => state.wallet.connected)
    const dispatch = useAppDispatch();

    const connectLink = () => {
        if (walletConnected) {
            return <a onClick={() => dispatch(disconnect())}>0x0000...0000</a>
        } else {
            return <a onClick={() => dispatch(connect())}>Connect</a>
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
