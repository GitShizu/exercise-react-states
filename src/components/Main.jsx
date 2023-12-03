import './Main.css'


export default ({logoUrl, logoAlt})=>{
    
    return(
        <main id='home'>
            <h1>Home</h1>
            <figure><img src={logoUrl} alt={logoAlt} /></figure>
        </main>
    )
}



