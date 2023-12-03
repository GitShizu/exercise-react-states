import { useState } from "react"
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import './Slider.css'

export default () => {
    const [volume, setVolume] = useState(100);
    const handleMute = () => volume>0?setVolume(0):setVolume(50);

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
                <button onClick={handleMute}>{volume > 0 ? <GoUnmute /> : <GoMute />}</button>
            </div>
        </section>)
}
// [isMuted, setIsMuted] = useState(true)
// () => setOpen((previsMuted) => !isMuted)