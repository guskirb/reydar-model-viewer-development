import { useConfig } from "../../../contexts/useConfig";
import { useAction } from "../../../contexts/useAction";

import ActionButtonViewerState from "../Action/ActionButtonViewerState";
import ExploreIcon from "../../../assets/icons/explore.png";
import { useCurrentVariant } from "../../../contexts/useCurrentVariant";

export default function ArButton() {
   const [config] = useConfig();
   const [action, setAction] = useAction();
   const [currentVariant] = useCurrentVariant();

   // function isHotspots() {
   //    let isHotspots;
   //    config.products.forEach((product) => {
   //       product.variants.forEach((variant) => {
   //          if (variant.hotspots) {
   //             isHotspots = true;
   //          }
   //       });
   //    });
   //    return isHotspots;
   // }

   return (
      config.actions.explore && (
         <ActionButtonViewerState
            label="Explore"
            iconImg={ExploreIcon}
            action="explore"
            handleStateButtonClicked={setAction}
            active={action.explore}
            disabled={!currentVariant.hotspots}
         />
      )
   );
}
