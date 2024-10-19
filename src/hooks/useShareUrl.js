import { useCurrentVariant } from "../contexts/useCurrentVariant";
import { useCurrentProduct } from "../contexts/useCurrentProduct";
import { useAction } from "../contexts/useAction";
import { useConfig } from "../contexts/useConfig";

export function useShareUrl() {
   const [currentModel] = useCurrentVariant();
   const [currentProduct] = useCurrentProduct();
   const [action] = useAction();
   const [config] = useConfig();

   const productIndex = config.products.findIndex(
      (product) => product.uuid === currentProduct.uuid
   );

   const variantIndex = config.products[productIndex].variants.findIndex(
      (variant) => variant.uuid === currentModel.uuid
   );

   const baseUrl = window.location.origin + window.location.pathname;

   const urlParams = [
      baseUrl,
      `?config_uuid=${config.uuid}`,
      `&product=${productIndex}`,
      `&variant=${variantIndex}`,
      action.explore ? "&show_hotspots" : "",
   ];

   const url = urlParams.join("");
   return url;
}
