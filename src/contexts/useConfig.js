import { createContext, useContext, useState, useEffect } from "react";
import { useCurrentProduct } from "./useCurrentProduct";
import { useCurrentVariant } from "./useCurrentVariant";
import { useAction } from "../contexts/useAction";

const configContext = createContext();

export function useConfig() {
   return useContext(configContext);
}

export function ConfigProvider(props) {
   const [config, setConfig] = useState();
   const [loading, setLoading] = useState(true);
   const [, setCurrentProduct] = useCurrentProduct();
   const [, setCurrentModel] = useCurrentVariant();
   const [, setAction] = useAction();

   const params = new URLSearchParams(window.location.search);
   const documentRoot = document.documentElement;
   const defaultProductIndex = params.get("product") ? params.get("product") : 0;
   const defaultVariantIndex = params.get("variant") ? params.get("variant") : 0;

   const baseUrl =
      process.env.REACT_APP_ENV === "production"
         ? "https://cdn.enginecloud.co.uk"
         : "https://cdn.enginecloud.co.uk/staging";

   const configLocation = params.get("config_uuid")
      ? `${baseUrl}/viewer/configs/${params.get("config_uuid")}.json`
      : "default-config.json";

   function fetchConfigData() {
      fetch(configLocation)
         .then((response) => response.json())
         .then((data) => {
            setConfig(data);
            setBrandColor(data["brand-color"]);
            setHotspotColor(data["hotspot-color"]);
            setBackgroundColor(data["background-color"]);
            setCurrentProduct(data.products[defaultProductIndex]);
            setCurrentModel(data.products[defaultProductIndex].variants[defaultVariantIndex]);
            params.has("show_hotspots") && setAction("explore");
         })
         .then(() => setLoading(false));
   }

   function setBrandColor(color) {
      documentRoot.style.setProperty("--brand-color", color);
   }

   function setHotspotColor(color) {
      documentRoot.style.setProperty("--hotspot-color", color);
   }

   function setBackgroundColor(color) {
      documentRoot.style.setProperty("--background-color", color);
   }

   useEffect(() => {
      fetchConfigData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      !loading && (
         <configContext.Provider value={[config, setConfig]}>
            {props.children}
         </configContext.Provider>
      )
   );
}
