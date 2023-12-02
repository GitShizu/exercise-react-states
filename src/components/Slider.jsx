import { useState } from "react"
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import './Slider.css'

export default () => {
    const [volume, setVolume] = useState(100);
    const [isMuted, setIsMuted] = useState(false);
    return (
        <section id="slider-container">
            <div>{volume}</div>
            <div>
                <input onChange={e => setVolume(e.target.value)}
                    type="range"
                    name="volume-slider"
                    min="0" max="100"
                    value={volume}
                />
                <figure>{isMuted ? <GoUnmute /> : <GoMute />}</figure>
                <button >{isMuted ? 'Unmute' : 'Mute'}</button>
            </div>
        </section>)
}

// onClick={setVolume(0)}
// onClick={isMuted?setIsMuted(false):setIsMuted(true)}