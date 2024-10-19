import "./ActionButton.scss";
import { useAction } from "../../../contexts/useAction";
import ReactGA from "react-ga4";

const ActionButtonViewerState = (props) => {
   const [action, setAction] = useAction();

   function handleClick() {
      action[props.action] ? setAction("view") : setAction(props.action);

      ReactGA.event({
         category: "Action Button",
         action: `reybeam_${props.action}`.toLowerCase(),
      });
   }

   return (
      <button
         className={
            "action-btn " +
            (props.active ? "action-btn-active " : "") +
            (props.className && props.className)
         }
         onClick={handleClick}
         disabled={props.disabled}
      >
         {props.iconImg && (
            <img src={props.iconImg} alt="icon" aria-hidden="true" className="action-btn__icon" />
         )}
         <span className="action-btn__label">{props.label}</span>
      </button>
   );
};

export default ActionButtonViewerState;
