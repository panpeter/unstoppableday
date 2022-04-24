import React, {useState} from 'react'
import {useAppDispatch} from "../../app/hooks";
import {postAdded} from "./postsSlice";
import {nanoid} from "@reduxjs/toolkit";

export const CreatePostForm = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useAppDispatch()

    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onImageChanged = (e: React.FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)
    const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value)

    const onCreatePostClicked = () => {
        if (title && (content || image)) {
            dispatch(postAdded({
                id: nanoid(),
                title: title,
                content: content,
                image: image,
                score: 0
            }))

            setTitle('')
            setContent('')
            setImage('')
        }
    }

    return (
        <section>
            <form>
                <p>
                    <label htmlFor="postTitle">Title:</label>
                    <br/>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </p>
                <p>
                    <label htmlFor="postImage">Image:</label>
                    <br/>
                    <input
                        type="text"
                        id="postImage"
                        name="postImage"
                        value={image}
                        onChange={onImageChanged}
                    />
                </p>
                <p>
                    <label htmlFor="postContent">Content:</label>
                    <br/>
                    <textarea
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}
                    />
                </p>
                <button type="button" onClick={onCreatePostClicked}>Create Post</button>
            </form>
        </section>
    )
}
