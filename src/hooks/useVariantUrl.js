import { useCurrentProduct } from "../contexts/useCurrentProduct";

export function useVariantUrl(variant) {
   const [currentProduct] = useCurrentProduct();
   const baseUrl =
      process.env.REACT_APP_ENV === "production"
         ? "https://cdn.enginecloud.co.uk"
         : "https://cdn.enginecloud.co.uk/staging";

   const url = `${baseUrl}/models/${currentProduct.uuid}/${variant}`;

   return url;
}
