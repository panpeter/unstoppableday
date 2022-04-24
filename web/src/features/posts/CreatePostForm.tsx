import React, {useState} from 'react'
import {useAppDispatch} from "../../app/hooks";
import {postAdded} from "./postsSlice";

export const CreatePostForm = () => {
    let todayString = new Date().toISOString().split('T')[0]

    const [date, setDate] = useState(todayString)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useAppDispatch()

    const onDateChanged = (e: React.FormEvent<HTMLInputElement>) => setDate(e.currentTarget.value)
    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onLinkChanged = (e: React.FormEvent<HTMLInputElement>) => setLink(e.currentTarget.value)
    const onImageChanged = (e: React.FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)
    const onDescriptionChanged = (e: React.FormEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value)

    const onCreatePostClicked = () => {
        dispatch(postAdded(date, title, link, image, description))
        setTitle('')
        setLink('')
        setImage('')
        setDescription('')
    }

    const maxTitleLength = 100
    const maxDescriptionLength = 5000
    const canCreate = Boolean(title) && (Boolean(link) || Boolean(image) || Boolean(description))

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
                        maxLength={maxTitleLength}
                        value={title}
                        onChange={onTitleChanged}
                    />
                </p>
                <p>
                    <label htmlFor="postLink">Link:</label>
                    <br/>
                    <input
                        type="url"
                        id="postLink"
                        name="postLink"
                        value={link}
                        onChange={onLinkChanged}
                    />
                </p>
                <p>
                    <label htmlFor="postImage">Image:</label>
                    <br/>
                    <input
                        type="url"
                        id="postImage"
                        name="postImage"
                        value={image}
                        onChange={onImageChanged}
                    />
                </p>
                <p>
                    <label htmlFor="postDescription">Description:</label>
                    <br/>
                    <textarea
                        id="postDescription"
                        name="postDescription"
                        value={description}
                        maxLength={maxDescriptionLength}
                        onChange={onDescriptionChanged}
                    />
                </p>
                <button type="button" onClick={onCreatePostClicked} disabled={!canCreate}>Create Post</button>
            </form>
        </section>
    )
}
