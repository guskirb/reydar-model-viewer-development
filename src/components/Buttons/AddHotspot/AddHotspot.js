import { useAction } from "../../../contexts/useAction"
import { useConfig } from "../../../contexts/useConfig";
import ActionButtonViewerState from "../Action/ActionButtonViewerState";

export const AddHotspot = () => {
    const [config] = useConfig();
    const [action, setAction] = useAction();

    return (
        config.actions.add ?? (
            <ActionButtonViewerState
                label="Add"
                icon="fa-light fa-eye"
                action="add"
                active={action.add}
                handleStateButtonClicked={setAction}
            />
        )
    )
}
