import "./Modal.scss";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function Modal(props) {
   return createPortal(
      <AnimatePresence>
         {props.canShow && (
            <motion.div
               className="modal"
               id={props.id}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <motion.div
                  className={`modal__inner ${props.className}`}
                  transition={{ type: "spring" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
               >
                  {props.children}
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>,
      document.getElementById("portal")
   );
}
