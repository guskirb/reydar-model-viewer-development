import { useCurrentVariant } from "../../../contexts/useCurrentVariant";
import { useCurrentProduct } from "../../../contexts/useCurrentProduct";
import { useVariantUrl } from "../../../hooks/useVariantUrl";
import "./ModelButton.scss";

export default function ModelButton({ model, className, product }) {
   const [, setCurrentVariant] = useCurrentVariant();
   const [, setCurrentProduct] = useCurrentProduct();
   const thumbnailSrc = useVariantUrl(model.thumbnail);

   const handleClick = (event) => {
      removeAllActiveStates();
      setCurrentProduct(product);
      setCurrentVariant(model);
      event.currentTarget.classList.add("active");
   };

   const removeAllActiveStates = () => {
      const modelButtons = document.querySelectorAll(".btn-product");
      modelButtons.forEach((button) => button.classList.remove("active"));
   };

   return (
      <li>
         <button className={`btn-product ${className}`} onClick={handleClick}>
            <img src={thumbnailSrc} alt="Product Button" draggable="false"></img>
         </button>
      </li>
   );
}
