import { useState } from "react"
import './PSWgen.css'

export default () => {
    const [passwordLength, setPasswordLength] = useState(6);
    const [password, setPassword] = useState('');
    const [addUpperCase, setAddUpperCase] = useState(true);
    const [addLowerCase, setAddLowerCase] = useState(true);
    const [addSymbols, setAddSymbols] = useState(true);
    const [showResult, setShowResult] = useState(false);

    const handleLength = e => setPasswordLength(e.target.valueAsNumber);
    const handleClick = () => {
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
        if (addUpperCase) { characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' }
        let randomPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * (characters.length - 1) + 1)
            randomPassword += characters[randomIndex];
        }
        setShowResult(true);
        setPassword(randomPassword)
    }
    const handleUpperCase = () => { addUpperCase ? setAddUpperCase(false) : setAddUpperCase(true) };
    const handleLowerCase = () => { addLowerCase ? setAddLowerCase(false) : setAddLowerCase(true) };
    const handleSymbols = () => { addSymbols ? setAddSymbols(false) : setAddSymbols(true) };
    const noCheckBoxesChecked = !addUpperCase && !addLowerCase && !addSymbols;
    return (
        <section id="psw-gen">
            <div>
                <h2>Choose your password's settings</h2>
                <h4>(at least one option must be checked)</h4>
            </div>
            <form id="dashboard">
                <label>Length
                    <input type="number"
                        onChange={handleLength}
                        value={passwordLength}
                        min={6}
                        max={30} />
                </label>
                <label>Use upper case

                    <input type="checkbox"
                        onChange={handleUpperCase}
                        checked={addUpperCase} />

                </label>
                <label>Use lower case

                    <input type="checkbox"
                        onChange={handleLowerCase}
                        checked={addLowerCase} />

                </label>
                <label>Use Symbols

                    <input type="checkbox"
                        onChange={handleSymbols}
                        checked={addSymbols} />

                </label>
            </form>

            <button onClick={handleClick} disabled={noCheckBoxesChecked}>Generate</button>
            <div className={!showResult ? "output-container" : "show-output"}>
                <h3>Here's your password:</h3>
                <span>{password}</span>
            </div>
        </section>
    )
}