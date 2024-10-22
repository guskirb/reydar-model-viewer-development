import { useEffect, useState } from "react";

import { useConfig } from "../../../contexts/useConfig";
import { ColorButton } from "../../Buttons/Color/ColorButton";

export const BrandColor = () => {
    const [config, setConfig] = useConfig();
    const [color, setColor] = useState(config["brand-color"]);

    useEffect(() => {
        const documentRoot = document.documentElement;
        config["brand-color"] = color;
        documentRoot.style.setProperty("--brand-color", color);
    }, [color])

    return (
        <>
            <ColorButton color={color} setColor={setColor} />
        </>
    )
}
