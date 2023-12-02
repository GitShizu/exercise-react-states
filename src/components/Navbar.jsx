import { CiLight } from "react-icons/ci";
import { MdNightlightRound } from "react-icons/md";
import './Navbar.css'



const Links = ({ linksDataArray }) => {
    return (
        linksDataArray.map(({ url, text, icon }, i) => {
            return (
                <li key={`n_${i}`}>
                    <a href={url}>{icon} {text}</a>
                </li>
            )
        })
    )
}

export default ({ navLinksData, logoUrl, logoAlt, islightModeOn, handleColorMode }) => {
    const colorModeicon = islightModeOn ? <MdNightlightRound /> : <CiLight />;
    return (
        <menu id="navbar">
            <figure>
                <img src={logoUrl} alt={logoAlt} />
            </figure>
            <section id='dashboard'>
                <Links linksDataArray={navLinksData} />
            </section>
            <div id='switch'>
            <p>Toggle {islightModeOn?'dark':'light'} mode</p>
            <button className={islightModeOn ? 'light' : 'dark'} onClick={handleColorMode}>{colorModeicon}</button>
            </div>
            
        </menu>
    )
}