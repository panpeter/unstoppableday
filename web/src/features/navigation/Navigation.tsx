import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css';

export function Navigation() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({isActive}) => (isActive ? styles.current : '')}
            >Latest</NavLink>
            {' '}
            <NavLink
                to="/upcoming"
                className={({isActive}) => (isActive ? styles.current : '')}
            >Upcoming</NavLink>
            <NavLink
                to="/day"
                className={({isActive}) => (isActive ? styles.current : '')}
            >Pick a Day</NavLink>
            {' '}
            <NavLink
                to="/new"
                className={({isActive}) => (isActive ? styles.current : '')}
            >Create Post</NavLink>
            <a>Connect</a>
        </nav>
    );
}
