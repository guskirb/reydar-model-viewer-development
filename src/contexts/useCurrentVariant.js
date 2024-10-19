import { createContext, useContext, useState } from "react";

const variantContext = createContext();

export function useCurrentVariant() {
   return useContext(variantContext);
}

export function VariantProvider(props) {
   const [currentVariant, setcurrentVariant] = useState();

   return (
      <variantContext.Provider value={[currentVariant, setcurrentVariant]}>
         {props.children}
      </variantContext.Provider>
   );
}
