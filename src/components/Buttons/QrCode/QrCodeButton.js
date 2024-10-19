import "./QrCodeButton.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const QrCodeButton = ({ handleClick }) => {
   return (
      <button className="btn-qr-code" onClick={handleClick}>
         <FontAwesomeIcon icon="fa-solid fa-qrcode"></FontAwesomeIcon>
         <div className="btn-overlay"></div>
      </button>
   );
};

export default QrCodeButton;
