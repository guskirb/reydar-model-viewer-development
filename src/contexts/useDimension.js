import { createContext, useContext, useState } from "react";

const dimensionContext = createContext();

export function useDimension() {
    return useContext(dimensionContext);
}

export function DimensionProvider(props) {
    const [dimension, setDimension] = useState(false);

    return (
        <dimensionContext.Provider value={[dimension, setDimension]}>{props.children}</dimensionContext.Provider>
    );
}