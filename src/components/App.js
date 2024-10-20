import "./App.scss";
import { VariantProvider } from "../contexts/useCurrentVariant";
import { ProductProvider } from "../contexts/useCurrentProduct";
import { ActionProvider } from "../contexts/useAction";
import { ConfigProvider } from "../contexts/useConfig";
import { DimensionProvider } from "../contexts/useDimension";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

import ModelViewer from "./ModelViewer/ModelViewer";
import ModelSelector from "./ModelSelector/ModelSelector";
import ActionBar from "./ActionBar/ActionBar";
import Watermark from "./Watermark/Watermark";
import ModelTitle from "./ModelTitle/ModelTitle";

export default function App() {
   useGoogleAnalytics();

   return (
      <ProductProvider>
         <VariantProvider>
            <ActionProvider>
               <ConfigProvider>
                  <DimensionProvider>
                     <ActionBar />
                     <ModelViewer />
                     <ModelSelector />
                     <Watermark />
                     <ModelTitle />
                  </DimensionProvider>
               </ConfigProvider>
            </ActionProvider>
         </VariantProvider>
      </ProductProvider>
   );
}
