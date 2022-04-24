import React from 'react';
import styles from './Footer.module.css';
import {NavLink} from "react-router-dom";

export function Footer() {
    return (
        <footer>
            <p className={styles.links}>
                <NavLink to="/roadmap">Roadmap</NavLink>
                <a href="https://twitter.com/nstpday">Twitter</a>
                <a href="https://opensea.io/collection/unstoppable-day-nft">Day NFT</a>
            </p>
            <p>
                <a href="https://unstoppableday.io">unstoppableday.io</a>
                {' '}
                is created by
                {' '}
                <a href="https://piotrwilczek.com" className={styles.author}>Piotr Wilczek</a>
                {' '}
                and the code is publicly accessible on
                {' '}
                <a href="https://github.com/panpeter/unstoppableday">GitHub</a>.
            </p>
            <p>
                To project is build in public and you can follow the progress at
                {' '}
                <a href="https://twitter.com/piotrekwilczek">@piotrekwilczek</a>
            </p>
        </footer>
    );
}
