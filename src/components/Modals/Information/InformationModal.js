import "./InformationModal.scss";
import Modal from "../../Modals/Modal/Modal";
import CloseButton from "../../Buttons/Close/CloseButton";

import RotateIcon from "../../../assets/icons/rotate.svg";
import ScrollIcon from "../../../assets/icons/scroll.svg";
import PinchIcon from "../../../assets/icons/pinch.svg";
import SwipeIcon from "../../../assets/icons/swipe.svg";

export default function InformationModal(props) {
   const isTouchEnabled =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

   return (
      <Modal canShow={props.canShow} className="information-modal">
         <CloseButton closeModal={() => props.updateModalState(false)} />
         <h2 className="information-modal__title">How to Use</h2>
         {isTouchEnabled ? (
            <div className="mobile-instructions">
               <img src={SwipeIcon} alt="Swipe to rotate" />
               <p>Swipe to Rotate</p>

               <img src={PinchIcon} alt="Pinch to zoom" />
               <p>Pinch to Zoom</p>
            </div>
         ) : (
            <div className="desktop-instructions">
               <img src={ScrollIcon} alt="Scroll mouse wheel to zoom" />
               <p>Scroll to Zoom</p>

               <img src={RotateIcon} alt="Drag mouse to rotate" />
               <p>Drag to Rotate</p>
            </div>
         )}
      </Modal>
   );
}
