
import { useState } from 'react'
import './Navbar.css'



const Links = ({ linksDataArray }) => {
    return (
        linksDataArray.map(({ url, text }, i) => {
            return (
                <li key={`n_${i}`}>
                    <a href={url}>{text}</a>
                </li>
            )
        })
    )
}

export default ({ navLinksData, logoUrl, logoAlt, islightModeOn, handleColorMode }) => {

    return (
        <menu  id="navbar">
            <figure>
                <img src={logoUrl} alt={logoAlt} />
            </figure>
            <section id='dashboard'>
                <button className={islightModeOn?'light':'dark'} onClick={handleColorMode} id='switch'>Mode</button>
                <Links linksDataArray={navLinksData} />
            </section>
        </menu>
    )
}