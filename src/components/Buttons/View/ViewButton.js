import { useAction } from "../../../contexts/useAction";
import { useConfig } from "../../../contexts/useConfig";

import ActionButtonViewerState from "../Action/ActionButtonViewerState";
import EyeIcon from "../../../assets/icons/eye.png";

export default function ViewButton() {
   const [config] = useConfig();
   const [action, setAction] = useAction();

   return (
      config.actions.view && (
         <ActionButtonViewerState
            label="View"
            iconImg={EyeIcon}
            icon="fa-light fa-eye"
            action="view"
            active={action.view}
            handleStateButtonClicked={setAction}
         />
      )
   );
}
