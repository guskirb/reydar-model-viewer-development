import "./DimensionCheckbox.scss";

import { useDimension } from "../../../contexts/useDimension";

export const DimensionCheckbox = () => {
    const [dimension, setDimension] = useDimension();

    function onChange(e) {
        setDimension(e.target.checked);
    }

    return (
        <>
            <label className="checkbox">Dimensions
                <input className="checkbox__input" type="checkbox" onChange={onChange} checked={dimension} />
                <span className="checkbox__box" />
            </label>
        </>
    )
}
