import "./ModelTitle.scss";
import { useCurrentProduct } from "../../contexts/useCurrentProduct";
import { useCurrentVariant } from "../../contexts/useCurrentVariant";
import { useConfig } from "../../contexts/useConfig";

export default function ModelTitle() {
   const [currentProduct] = useCurrentProduct();
   const [currentVariant] = useCurrentVariant();
   const [config] = useConfig();

   return (
      config["show-title"] && (
         <div className="model-title">
            {currentProduct.name && (
               <h1>
                  {currentProduct.name} <span>{currentVariant["variant-name"]}</span>
               </h1>
            )}
         </div>
      )
   );
}
