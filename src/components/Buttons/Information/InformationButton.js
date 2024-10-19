import { useState } from "react";
import { useConfig } from "../../../contexts/useConfig";

import ReactGA from "react-ga4";
import ActionButtonStandard from "../Action/ActionButtonStandard";
import InformationIcon from "../../../assets/icons/information.png";
import InformationModal from "../../Modals/Information/InformationModal";

export default function InformationButton() {
   const [showModal, setShowModal] = useState(false);
   const [config] = useConfig();

   function handleClick() {
      setShowModal(true);
      ReactGA.event({
         category: "Modal View",
         action: "reybeam_information",
      });
   }

   return (
      config.actions.information && (
         <>
            <ActionButtonStandard
               className="information-button"
               iconImg={InformationIcon}
               onClick={handleClick}
            />
            <InformationModal canShow={showModal} updateModalState={setShowModal} />
         </>
      )
   );
}
