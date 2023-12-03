import { useState } from "react"
import './PSWgen.css'

export default () => {
    const [passwordLength, setPasswordLength] = useState(0)
    const [password, setPassword] = useState('')

    const handleInput = e => setPasswordLength(e.target.value);
    const generatePassword = () => {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()'
        let randomPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * (characters.length - 1) + 1)
            randomPassword += characters[randomIndex];
        }
        setPassword(randomPassword)
    }
    return (
        <section id="psw-gen">
            <h2>Choose the length of your password</h2>
            <div>
                <input type="number" onChange={handleInput} value={passwordLength} />
                <button onClick={generatePassword}>Generate</button>
            </div>
            <h3>Here's your password:</h3>
            <div id="output">{password}</div>
        </section>
    )
}