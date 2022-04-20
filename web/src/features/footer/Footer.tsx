import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer>
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
                Contract address:
                {' '}
                <a href="https://polygonscan.com/address/0x8bA8bd39c44034BD32296d84F908545F012A16Db">
                    0x8bA8bd39c44034BD32296d84F908545F012A16Db
                </a>
            </p>
        </footer>
    );
}
