import { useRef } from "react";
import "./HotspotColor.scss";

export const HotspotColor = (props) => {
    const inputRef = useRef(null);

    function onChange(e) {
        props.setColor(e.target.value);
    }

    function handleClick() {
        if (inputRef.current !== null) inputRef.current.click();
    }

    return (
        <>
            <div
                className="hotspot-color"
                style={{ backgroundColor: props.color }}
                onClick={handleClick}
            >
                <input type="color" className="hotspot-color__input" value={props.color} onChange={onChange} ref={inputRef} />
            </div>
        </>
    )
}
