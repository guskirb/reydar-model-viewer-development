import "./ModelSelector.scss";
import { useEffect } from "react";
import { useConfig } from "../../contexts/useConfig";
import { useAction } from "../../contexts/useAction";
import { useCurrentVariant } from "../../contexts/useCurrentVariant";

import ModelButton from "../Buttons/Model/ModelButton";

function setupDragScroll() {
   const scrollView = document.querySelector(".grab-scroll");
   scrollView.scrollTop = 0;
   let pos = { top: 0, left: 0, x: 0, y: 0 };
   let dx = 0;

   const mouseDownHandler = function (e) {
      scrollView.style.userSelect = "none";

      pos = {
         // The current scroll
         left: scrollView.scrollLeft,
         // Get the current mouse position
         x: e.clientX || e.touches[0].pageX,
      };

      dx = 0;

      scrollView.addEventListener("mousemove", mouseMoveHandler);
      scrollView.addEventListener("mouseup", mouseUpHandler);
      scrollView.addEventListener("touchmove", mouseMoveHandler);
      scrollView.addEventListener("touchend", mouseUpHandler);
   };

   const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      dx = (e.clientX || e.touches[0].pageX) - pos.x;
      scrollView.scrollLeft = pos.left - dx;
   };

   const mouseUpHandler = function () {
      function preventClickOnDrag(event) {
         if (Math.abs(dx) > 5) {
            event.preventDefault();
            event.stopImmediatePropagation();
         }
      }

      scrollView.addEventListener("click", preventClickOnDrag, true);

      scrollView.removeEventListener("mousemove", mouseMoveHandler);
      scrollView.removeEventListener("mouseup", mouseUpHandler);
      scrollView.removeEventListener("touchmove", mouseMoveHandler);
      scrollView.removeEventListener("touchend", mouseUpHandler);

      scrollView.style.cursor = "grab";
      scrollView.style.removeProperty("user-select");
   };

   scrollView.addEventListener("mousedown", mouseDownHandler);
   scrollView.addEventListener("touchstart", mouseDownHandler);
}

export default function ModelSelector() {
   const [config] = useConfig();
   const [action, setAction] = useAction();
   const [currentVariant] = useCurrentVariant();

   function closeOnEscapeKey(event) {
      const productSelector = document.querySelector(".product-selector");
      const productSelectorVisible = !productSelector.classList.contains("product-selector-hidden");
      productSelectorVisible && event.key === "Escape" && setAction("view");
   }

   useEffect(() => {
      setupDragScroll();
      window.addEventListener("keyup", closeOnEscapeKey);
      return function cleanup() {
         window.removeEventListener("keyup", closeOnEscapeKey);
      };
      // eslint-disable-next-line
   }, []);

   return (
      <div
         className={action.select ? "product-selector" : "product-selector product-selector-hidden"}
      >
         <ul className="product-selector-list grab-scroll">
            {config.products.map((product) =>
               // Products loop
               product.variants.map((variant, index) => {
                  // Variants loop
                  return (
                     <ModelButton
                        className={variant.uuid === currentVariant.uuid && "active"}
                        product={product}
                        model={variant}
                        key={variant.uuid}
                     ></ModelButton>
                  );
               })
            )}
         </ul>
      </div>
   );
}
