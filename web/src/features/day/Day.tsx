import React from 'react';
import styles from './Day.module.css';

export function Day() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.score}>
                        <span>▲</span>
                        <span>21</span>
                    </div>
                    <h4 className={styles.title}>Where does it come from?</h4>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </p>
                <div className={styles.links}>
                    <a href={"/"}>▲ Vote</a>
                    <a href={"/"}>💰 Promote</a>
                    <a href={"/"}>🙈 Report</a>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.score}>
                        <span>▲</span>
                        <span>21</span>
                    </div>
                    <h4 className={styles.title}>Where does it come from?</h4>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </p>
                <div className={styles.links}>
                    <div className={styles.links}>
                        <a href={"/"}>▲ Vote</a>
                        <a href={"/"}>💰 Promote</a>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.score}>
                        <span>▲</span>
                        <span>21</span>
                    </div>
                    <h4 className={styles.title}>Where does it come from?</h4>
                </div>
                <img className={styles.image} src="https://via.placeholder.com/300" />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s.
                </p>
                <div className={styles.links}>
                    <div className={styles.links}>
                        <a href={"/"}>▲ Vote</a>
                        <a href={"/"}>💰 Promote</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
