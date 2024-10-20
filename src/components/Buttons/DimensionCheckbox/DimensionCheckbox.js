import { useDimension } from "../../../contexts/useDimension";

export const DimensionCheckbox = () => {
    const [, setDimension] = useDimension();

    function onChange(e) {
        setDimension(e.target.checked);
    }

    return (
        <>
            <input type="checkbox" onChange={onChange} />
        </>
    )
}
