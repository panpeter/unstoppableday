import React from 'react'
import {useAppSelector} from "../../app/hooks";
import styles from "./Posts.module.css";

export const PostsList = () => {
    const posts = useAppSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.score}>
                    <span>▲</span>
                    <span>{post.score}</span>
                </div>
                <h4 className={styles.title}>{post.title}</h4>
            </div>
            {post.image &&
                <img alt="placeholder" className={styles.image} src={post.image}/>
            }
            <p>{post.content}</p>
            <div className={styles.links}>
                <a href={"/"}>▲ Vote</a>
                <a href={"/"}>💰 Promote</a>
                <a href={"/"}>🙈 Report</a>
            </div>
        </div>
    ))

    return (
        <section>
            {renderedPosts}
        </section>
    )
}
