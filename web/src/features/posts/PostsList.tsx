import React from 'react';
import {useAppSelector} from "../../app/hooks";
import styles from "./Posts.module.css";
import {Post} from "./postsSlice";

export interface PostListProps {
    date: string;
}
export const PostsList = ({date}: PostListProps) => {
    const posts = useAppSelector(state =>
        state.posts.filter(post => post.date === date)
    )

    const orderedPosts = posts.slice().sort((a, b) => b.score - a.score)

    const headerElement = (post: Post) => {
        return <div className={styles.header}>
            <div className={styles.score}>
                <span>▲</span>
                <span>{post.score}</span>
            </div>
            {titleElement(post)}
        </div>
    }

    const titleElement = (post: Post) => {
        if (post.link) {
            return <h4 className={styles.title}>
                <a href={post.link}>{post.title}</a>
            </h4>
        } else {
            return <h4 className={styles.title}>{post.title}</h4>
        }
    }

    const imageElement = (post: Post) => {
        if (post.image) {
            return <img alt="placeholder" className={styles.image} src={post.image}/>
        } else {
            return ""
        }
    }

    const descriptionElement = (post: Post) => {
        if (post.description) {
            return <p className={styles.description}>{post.description}</p>
        } else {
            return ""
        }
    }

    const linksElement = (post: Post) => {
        return <div className={styles.links}>
            <a href={"/"}>▲ Vote</a>
            <a href={"/"}>💰 Promote</a>
            <a href={"/"}>🛑 Report</a>
            <a href={"/"}>❌ Delete</a>
        </div>
    }

    const renderedPosts = orderedPosts.map(post => (
        <div className={styles.container} key={post.id}>
            {headerElement(post)}
            {imageElement(post)}
            {descriptionElement(post)}
            {linksElement(post)}
        </div>
    ))

    if (renderedPosts.length === 0) {
        return (
            <section>
                <div className={styles.container}>No posts.</div>
            </section>
        )
    }

    return (
        <section>
            {renderedPosts}
        </section>
    )
}
