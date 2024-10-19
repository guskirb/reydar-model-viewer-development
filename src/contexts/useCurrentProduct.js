import { createContext, useContext, useState } from "react";

const productContext = createContext();

export function useCurrentProduct() {
   return useContext(productContext);
}

export function ProductProvider(props) {
   const [currentModel, setCurrentModel] = useState();

   return (
      <productContext.Provider value={[currentModel, setCurrentModel]}>
         {props.children}
      </productContext.Provider>
   );
}
