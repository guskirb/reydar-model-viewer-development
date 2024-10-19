import "./CloseButton.scss";
import { useEffect } from "react";
import { useAction } from "../../../contexts/useAction";
import CloseIcon from "../../../assets/icons/close.png";
import ActionButtonStandard from "../Action/ActionButtonStandard";

export default function CloseButton(props) {
   const [action, setAction] = useAction();

   function closeOnEscape(event) {
      // if action == "select" -> only close modal, not model selector
      const isSelect = action.select;
      event.key === "Escape" && props.closeModal();
      isSelect && setAction("select");
   }

   useEffect(() => {
      window.addEventListener("keyup", closeOnEscape);
      return () => {
         window.removeEventListener("keyup", closeOnEscape);
      };
      // eslint-disable-next-line
   }, []);

   return (
      <ActionButtonStandard
         iconImg={CloseIcon}
         handleClick={props.closeModal}
         className="button--close"
      />
   );
}
