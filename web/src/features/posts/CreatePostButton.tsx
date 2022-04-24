import {NavLink} from "react-router-dom";
import styles from "./Posts.module.css";
import React from "react";

export function CreatePostButton() {
    return (
        <NavLink to="/new" className={styles.create}>+ Create Post</NavLink>
    )
}