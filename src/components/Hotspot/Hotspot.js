import "./Hotspot.scss";
import LabelText from "../Labels/Text/LabelText";

export default function Hotspot({ hotspot }) {
   const position = `${hotspot.position.x} ${hotspot.position.y} ${hotspot.position.z}`;
   const normal = `${hotspot.normal.x} ${hotspot.normal.y} ${hotspot.normal.z}`;

   return (
      <button
         className="hotspot"
         data-normal={normal}
         data-position={position}
         slot={`hotspot-${hotspot.id}`}
         data-visibility-attribute="visible"
      >
         {hotspot.content && (
            <div className="hotspot__label">
               <LabelText content={hotspot.content} />
            </div>
         )}
      </button>
   );
}
