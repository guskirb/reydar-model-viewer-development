import "./ActionBar.scss";

import FullscreenButton from "../Buttons/Fullscreen/FullscreenButton";
import InformationButton from "../Buttons/Information/InformationButton";
import ShareButton from "../Buttons/Share/ShareButton";
import ArButton from "../Buttons/Ar/ArButton";
import ExploreButton from "../Buttons/Explore/ExploreButton";
import ViewButton from "../Buttons/View/ViewButton";
import SelectButton from "../Buttons/Select/SelectButton";
import BuyButton from "../Buttons/Buy/BuyButton";
import { AddHotspot } from "../Buttons/AddHotspot/AddHotspot";

const ActionBar = () => {
   return (
      <div className="action-bar">
         <div className="action-bar__left">
            <InformationButton />
         </div>

         <div className="action-bar-list">
            <ViewButton />
            <SelectButton />
            <ExploreButton />
            <BuyButton />
            <AddHotspot />
            <ArButton />
         </div>

         <div className="action-bar__right">
            <ShareButton />
            <FullscreenButton />
         </div>
      </div>
   );
};

export default ActionBar;
