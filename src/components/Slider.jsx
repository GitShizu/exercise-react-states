import { useState } from "react"
import { GoMute } from "react-icons/go";
import { GoUnmute } from "react-icons/go";
import './Slider.css'

export default () => {
    const [volume, setVolume] = useState(100);
    const handleMute = () => !isMuted ? setIsMuted(true) : setIsMuted(false);
    const [isMuted, setIsMuted] = useState(false);

    return (
        <section id="slider-container">
            <div>{isMuted ? 0 : volume}</div>
            <div>
                <input onChange={(e) => {
                    if(isMuted){
                        setIsMuted(false);
                        setVolume(0)
                    }else{
                        setVolume(e.target.value)}}
                    }
                    type="range"
                    name="volume-slider"
                    min="0" max="100"
                    value={isMuted ? 0 : volume}
                />
                <button onClick={handleMute}>{!isMuted ? <GoUnmute /> : <GoMute />}</button>
            </div>
        </section>)
}
