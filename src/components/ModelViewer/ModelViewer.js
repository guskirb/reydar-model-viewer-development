import "./ModelViewer.scss";
import "@google/model-viewer";

import { useEffect, useState } from "react";
import { disableBodyScroll } from "body-scroll-lock";
import { v4 as uuidv4 } from 'uuid';
import { useCurrentVariant } from "../../contexts/useCurrentVariant";
import { useConfig } from "../../contexts/useConfig";
import { useAction } from "../../contexts/useAction";
import { useCurrentProduct } from "../../contexts/useCurrentProduct";
import { useVariantUrl } from "../../hooks/useVariantUrl";

import HandoffModal from "../Modals/Handoff/HandoffModal";
import Hotspot from "../Hotspot/Hotspot";
import { DimensionLines } from "../DimensionLines/DimensionLines";

function ModelViewer() {
   const [modelViewerRendered, setModelViewerRendered] = useState(false);
   const [currentVariant, setCurrentVariant] = useCurrentVariant();
   const [currentProduct] = useCurrentProduct();
   const [config, setConfig] = useConfig();
   const [action, setAction] = useAction();

   const showHotspots = action.ar || action.explore || action.add;
   const modelFormat = currentVariant.glb ? currentVariant.glb : currentVariant.gltf;
   const modelSrc = useVariantUrl(modelFormat);

   useEffect(() => {
      const modelViewer = document.querySelector("model-viewer");
      disableBodyScroll(modelViewer);
      setModelViewerRendered(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   function handleAddHotspot(e) {
      if (action.add) {
         const { clientX, clientY } = e;
         const modelViewer = document.querySelector("model-viewer");
         const position = modelViewer.positionAndNormalFromPoint(clientX, clientY);

         if (!currentVariant.hotspots) {
            currentVariant.hotspots = [];
         }

         if (position) {
            let currVar = {
               ...currentVariant, hotspots: [{
                  id: uuidv4(),
                  position: position.position,
                  normal: position.normal
               }, ...currentVariant.hotspots]
            };

            setCurrentVariant(currVar);
            setConfig({
               ...config,
               products: config.products.map((product) => product.uuid !== currentProduct.uuid ? product : {
                  ...currentProduct, variants: currentProduct.variants.map((variant) => variant.uuid !== currentVariant.uuid ? variant : currVar)
               })
            });
            setAction("explore");
         }
      }
   }

   const isInIframe = window !== window.parent ? true : false;

   return (
      <div
         className="reydar-model-viewer"
         allowFullScreen
         mozallowfullscreen="true"
         webkitallowfullscreen="true"
      >
         <model-viewer
            id="model"
            alt="Reydar Model Viewer"
            src={modelSrc}
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="fixed"
            environment-image={config["background-environment"]}
            poster=""
            seamless-poster
            shadow-intensity="1"
            camera-controls
            enable-pan
            touch-action="none"
            onClick={handleAddHotspot}
            interaction-policy={isInIframe ? "allow-when-focused" : "always-allow"}
            auto-rotate={config["auto-rotate"] ? true : null}
            rotation-per-second={config["auto-rotate-speed"] ? config["auto-rotate-speed"] : "100%"}
            interaction-prompt-style={config["auto-rotate"] ? "basic" : "wiggle"}
         >
            <button slot="ar-button" style={{ display: "none" }}></button>
            <DimensionLines />
            {modelViewerRendered && <HandoffModal />}
            {showHotspots &&
               currentVariant.hotspots &&
               currentVariant.hotspots.map((hotspot) => {
                  return <Hotspot key={hotspot.id} hotspot={hotspot}></Hotspot>;
               })}
         </model-viewer>
      </div>
   );
}

export default ModelViewer;
