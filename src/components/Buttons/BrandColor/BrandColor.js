import { useEffect, useState } from "react";

import { useConfig } from "../../../contexts/useConfig";
import { ColorButton } from "../../Buttons/Color/ColorButton";

export const BrandColor = () => {
    const [config] = useConfig();
    const [color, setColor] = useState(config["brand-color"]);

    useEffect(() => {
        const documentRoot = document.documentElement;
        config["brand-color"] = color;
        documentRoot.style.setProperty("--brand-color", color);
    }, [color, config])

    return (
        <>
            <ColorButton color={color} setColor={setColor} />
        </>
    )
}
