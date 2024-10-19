import "./ShareButton.scss";
import { useState } from "react";
import { useConfig } from "../../../contexts/useConfig";
import { useShareUrl } from "../../../hooks/useShareUrl";
import { useCurrentVariant } from "../../../contexts/useCurrentVariant";

import ReactGA from "react-ga4";
import ActionButtonStandard from "../Action/ActionButtonStandard";
import ShareIcon from "../../../assets/icons/share.png";
import Modal from "../../Modals/Modal/Modal";

export default function ShareButton() {
   const [showModal, setShowModal] = useState();
   const [currentVariant] = useCurrentVariant();
   const [config] = useConfig();
   const shareUrl = useShareUrl();
   const url = currentVariant.share_url ? currentVariant.share_url : shareUrl;

   function copyToClipboard() {
      navigator.clipboard.writeText(url);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 1000);
   }

   function handleClick() {
      navigator.share
         ? navigator
              .share({
                 title: "ReyViewer - Model",
                 url: url,
              })
              .catch(console.error)
         : copyToClipboard();

      ReactGA.event({
         category: "Action Button",
         action: "reybeam_share",
      });
   }
   return (
      config.actions.share && (
         <>
            <ActionButtonStandard
               className="share-button"
               onClick={handleClick}
               iconImg={ShareIcon}
            />
            <Modal id={"shared-modal"} canShow={showModal}>
               <p>URL copied to clipboard</p>
            </Modal>
         </>
      )
   );
}
