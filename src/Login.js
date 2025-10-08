import {useState, useEffect} from 'react'
import {useFetcher} from 'react-router-dom'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const fetcher = useFetcher()

    const handleFormSubmit = evt => {
        evt.preventDefault()
        if (validate())
        fetcher.submit({email, password},
                {action: '/login', method: 'post'})
    }
    const handleFormReset = () => {
        setEmail('')
        setPassword('')
    }

            useEffect(() => {
                console.log("fetcher.data:", fetcher.data)
                if (!fetcher.data) return
                resetErrorMessages()
                if (fetcher.data === 'auth/user-not-found') {
                setErrorEmail('Пользователь не найден')
                } else if (fetcher.data === 'auth/invalid-credential') {
                setErrorPassword('Неверный пароль')
                }
            }, [fetcher.data])

    const resetErrorMessages = () => {
        setErrorEmail('')
        setErrorPassword('')
    }

    const validate = () => {
        resetErrorMessages()
        if (!email) {
            setErrorEmail('Адрес электронной почты не указан')
            return false
        }
        if (!password) {
            setErrorPassword('Пароль не указан')
            return false
        }
        return true
    }


    return (
        <section>
            <h1>Логин</h1>
            <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
                <div className='field'>
                    <label className='label'>Адрес электронной почты</label>
                    <div className='control'>
                        <input type='email' value={email} className='input' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    {errorEmail &&
                    <p className='help is-danger'>
                        {errorEmail}
                    </p>
                    }
                </div>
                <div className='field'>
                    <label className='label'>Пароль</label>
                    <div className='control'>
                        <input type='password' value={password} className="input"
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    {errorPassword &&
                    <p className='help is-danger'>
                        {errorPassword}
                    </p>
                    }
                </div>
                <div>
                    <div className='control'>
                        <input type='reset'
                         className='button is-warning is-light' value="Сброс"/>
                    </div>
                    <div className='control'>
                        <input type='submit' className='button is-primary' value="Войти"/>
                    </div>
                </div>
            </form>
        </section>
    )
}