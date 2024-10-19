import ActionButtonStandard from "../Action/ActionButtonStandard"
import { useAction } from "../../../contexts/useAction"

export const AddHotspot = () => {
    const [, , addHotspot, setAddHotspot] = useAction();

    function handleClick() {
        console.log(addHotspot);
        setAddHotspot(!addHotspot);
    }

    return (
        <ActionButtonStandard label="Add" onClick={handleClick} className={addHotspot ? "active" : ""} />
    )
}
