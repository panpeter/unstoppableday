import React from 'react'
import {useAppSelector} from "../../app/hooks";
import styles from "./Posts.module.css";
import {NavLink} from "react-router-dom";

export const PostsList = () => {
    const posts = useAppSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <div className={styles.container} key={post.id}>
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
            <NavLink to="/new" className={styles.create}>Create Post</NavLink>
            {renderedPosts}
        </section>
    )
}
