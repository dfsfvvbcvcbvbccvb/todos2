import { useState } from "react";
import { useSubmit } from 'react-router-dom'

export default function TodoAdd() {
    const submit = useSubmit()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')

    const handleImageChange = evt => {
        const cFiles = evt.target.files

        if (cFiles.length > 0) {
            const fileReader = new FileReader()
            fileReader.onload = () => {
                setImage(fileReader.result)
            }
            fileReader.readAsDataURL(cFiles[0])
        } else {
            setImage('')
        }
    }

    const handleFormSubmit = evt => {
        evt.preventDefault()
        const newDeed = { title, desc, image, done: false }
        const date = new Date()
        newDeed.createdAt = date.toLocaleString()
        newDeed.key = date.getTime()
        evt.target.reset()
        submit({title, desc, image},
            {action: '/add', method: 'post'})
    }

    const handleFormReset = () => {
        setTitle('')
        setDesc('')
        setImage('')
    }

    return (
        <section>
            <h1>Создание нового дела</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className="field">
                    <label className="label">Заголовок</label>
                    <div className="control">
                        <input className="input" value={title} 
                        onChange={e => setTitle(e.target.value)}></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Примечание</label>
                    <div className="control">
                        <textarea className="textarea" value={desc}
                         onChange={e => setDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="file">
                        <label className="file-label">
                            <input className="file-input" type="file" accept="image/*" onChange={handleImageChange}>
                            </input>
                            <span className="file-cta">
                                <span className="file-label">
                                    Графическая иллюстрация...
                                </span>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-right">
                        <div className="control"> 
                            <input type="reset" className="button is-warning is-light" value="Сброс"></input>
                        </div>
                        <div className="control">
                            <input type="submit" className="button is-primary" value="Создать дело"></input>
                        </div>
                </div>
            </form>
        </section>
    )
}