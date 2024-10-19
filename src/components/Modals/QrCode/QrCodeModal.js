import "./QrCodeModal.scss";
import { ReactComponent as QRSurround } from "../../../assets/qr-surround.svg";
import { QRCodeSVG } from "qrcode.react";
import { useShareUrl } from "../../../hooks/useShareUrl";

import CloseButton from "../../Buttons/Close/CloseButton";
import HandoffIcon from "../../../assets/icons/handoff.png";
import Modal from "../Modal/Modal";

const QrCodeViewer = (props) => {
   const shareUrl = useShareUrl();
   const url = shareUrl + "&handoff";

   return (
      <Modal canShow={props.canShow} id="qr-code-modal">
         <CloseButton closeModal={() => props.updateModalState(false)} />
         <h2 className="qr-code-modal__title">
            Scan QR Code
            <br />
            to view in your space
         </h2>

         <div className="qr-code-modal__qr">
            <QRCodeSVG value={url} size={102} className="qr-code" />
            <QRSurround className="qr-surround" />
         </div>

         <footer className="qr-code-modal__footer">
            <img src={HandoffIcon} alt="handoff icon" aria-hidden="true" />
            <strong>Hand off to mobile</strong>
            <p>Use your mobile device camera to scan the QR code above.</p>
         </footer>
      </Modal>
   );
};

export default QrCodeViewer;
