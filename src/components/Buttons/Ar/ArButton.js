import { useState } from "react";
import { useConfig } from "../../../contexts/useConfig";

import ReactGA from "react-ga4";
import ActionButtonStandard from "../Action/ActionButtonStandard";
import QrCodeModal from "../../Modals/QrCode/QrCodeModal";
import ArIcon from "../../../assets/icons/ar.png";

export default function ArButton() {
   const [config] = useConfig();
   const [showModal, setShowModal] = useState();

   function handleClick() {
      const modelViewer = document.querySelector("model-viewer");

      if (modelViewer.canActivateAR) {
         modelViewer.cameraOrbit = "0deg 75deg 105%";
         modelViewer.cameraTarget = "auto auto auto";
         modelViewer.resetTurntableRotation();
         setTimeout(() => modelViewer.activateAR(), 500);

         ReactGA.event({
            category: "Augmented Reality",
            action: "Activated",
         });
      } else {
         setShowModal(true);

         ReactGA.event({
            category: "Modal View",
            action: "Augmented Reality",
         });
      }
   }

   return (
      config.actions.ar && (
         <>
            <ActionButtonStandard label="AR" iconImg={ArIcon} handleClick={handleClick} />
            <QrCodeModal canShow={showModal} updateModalState={setShowModal} />
         </>
      )
   );
}
