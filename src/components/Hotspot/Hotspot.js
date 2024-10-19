import "./Hotspot.scss";

import { useState } from "react";

import LabelText from "../Labels/Text/LabelText";
import { EditHotspotModal } from "../Modals/EditHotspot/EditHotspotModal";

export default function Hotspot({ hotspot }) {
   const position = `${hotspot.position.x} ${hotspot.position.y} ${hotspot.position.z}`;
   const normal = `${hotspot.normal.x} ${hotspot.normal.y} ${hotspot.normal.z}`;
   const [showModal, setShowModal] = useState();

   function handleClick(e) {
      setShowModal(true);
   }

   return (
      <>
         <button
            className="hotspot"
            data-normal={normal}
            data-position={position}
            slot={`hotspot-${hotspot.id}`}
            data-visibility-attribute="visible"
            onClick={handleClick}
         >
            {hotspot.content && (
               <div className="hotspot__label">
                  <LabelText content={hotspot.content} />
               </div>
            )}
         </button>
         <EditHotspotModal canShow={showModal} updateModalState={setShowModal} hotspot={hotspot} />
      </>
   );
}
