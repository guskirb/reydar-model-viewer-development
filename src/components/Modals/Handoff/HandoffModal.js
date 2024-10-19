import "./HandoffModal.scss";
import { useState } from "react";

import Modal from "../../Modals/Modal/Modal";
import CloseButton from "../../Buttons/Close/CloseButton";
import ActionButtonStandard from "../../Buttons/Action/ActionButtonStandard";

export default function HandoffModal() {
   const params = new URLSearchParams(window.location.search);
   const [showModal, setShowModal] = useState(params.has("handoff"));
   const modelViewer = document.querySelector("model-viewer");

   return (
      <Modal canShow={showModal} className="handoff-modal">
         <CloseButton closeModal={() => setShowModal(false)} />
         <h2 className="handoff-modal__title">Launch AR Mode</h2>
         <p>Click the button below to view this model in augmented reality.</p>
         <ActionButtonStandard
            disabled={modelViewer.canActivateAR}
            label="Launch AR"
            className="handoff-modal__button"
            onClick={() => modelViewer.activateAR()}
         />
      </Modal>
   );
}
