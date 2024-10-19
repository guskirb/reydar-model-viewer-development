import { useConfig } from "../../../contexts/useConfig";
import { useAction } from "../../../contexts/useAction";

import ActionButtonViewerState from "../Action/ActionButtonViewerState";
import SelectIcon from "../../../assets/icons/select.png";

export default function SelectButton() {
   const [action, setAction] = useAction();
   const [config] = useConfig();

   function isMoreThanOneModel() {
      let modelCount = 0;
      config.products.forEach((product) => {
         modelCount += product.variants.length;
      });
      if (modelCount > 1) return true;
   }

   return (
      isMoreThanOneModel() && (
         <ActionButtonViewerState
            label="Select"
            iconImg={SelectIcon}
            action="select"
            active={action.select}
            handleStateButtonClicked={setAction}
         />
      )
   );
}
