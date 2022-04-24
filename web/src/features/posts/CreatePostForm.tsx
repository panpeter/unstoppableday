import React, {useState} from 'react'
import {useAppDispatch} from "../../app/hooks";
import {postAdded} from "./postsSlice";

export const CreatePostForm = () => {
    let todayString = new Date().toISOString().split('T')[0]

    const [date, setDate] = useState(todayString)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useAppDispatch()

    const onDateChanged = (e: React.FormEvent<HTMLInputElement>) => setDate(e.currentTarget.value)
    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onImageChanged = (e: React.FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)
    const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value)

    const onCreatePostClicked = () => {
        if (title && (content || image)) {
            dispatch(postAdded(date, title, content, image))

            setTitle('')
            setContent('')
            setImage('')
        }
    }

    return (
        <section>
            <form>
                <p>
                    <label htmlFor="postDate">Day:</label>
                    <br/>
                    <input
                        type="date"
                        id="postDate"
                        name="postDate"
                        value={date}
                        onChange={onDateChanged}
                    />
                </p>
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
