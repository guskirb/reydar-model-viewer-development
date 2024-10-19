import { createContext, useContext, useState } from "react";

const actionContext = createContext();

const actionDefault = {
   view: true,
   select: false,
   ar: false,
   buy: false,
   explore: false,
};

export function useAction() {
   return useContext(actionContext);
}

export function ActionProvider(props) {
   const [action, setActionState] = useState(actionDefault);
   const [addHotspot, setAddHotspot] = useState(false);

   function setAction(actionInput) {
      const actionTemp = {
         view: false,
         select: false,
         buy: false,
         explore: false,
      };

      actionTemp[actionInput] = true;
      setActionState(actionTemp);
   }

   return (
      <actionContext.Provider value={[action, setAction, addHotspot, setAddHotspot]}>{props.children}</actionContext.Provider>
   );
}
