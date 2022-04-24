import React, {useState} from 'react'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onImageChanged = (e: React.FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)
    const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value)

    return (
        <section>
            <h2>Create Post</h2>
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
                <button type="button">Save Post</button>
            </form>
        </section>
    )
}
