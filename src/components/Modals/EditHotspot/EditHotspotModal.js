import "./EditHotspotModal.scss";

import { useState } from "react";

import CloseButton from "../../Buttons/Close/CloseButton"
import Modal from "../Modal/Modal"
import { useCurrentVariant } from "../../../contexts/useCurrentVariant";
import { useCurrentProduct } from "../../../contexts/useCurrentProduct";
import { useConfig } from "../../../contexts/useConfig";
import ActionButtonStandard from "../../Buttons/Action/ActionButtonStandard";

export const EditHotspotModal = (props) => {
    const [value, setValue] = useState(props.hotspot.content ? props.hotspot.content : "");
    const [currentVariant, setCurrentVariant] = useCurrentVariant();
    const [config, setConfig] = useConfig();
    const [currentProduct] = useCurrentProduct();

    function handleSave(e) {
        e.preventDefault();
        let currVar = {
            ...currentVariant, hotspots: currentVariant.hotspots.map((hotspot) => hotspot.id !== props.hotspot.id ? hotspot : {
                ...hotspot,
                content: value,
            })
        };

        setCurrentVariant(currVar);
        setConfig({
            ...config,
            products: config.products.map((product) => product.uuid !== currentProduct.uuid ? product : {
                ...currentProduct, variants: currentProduct.variants.map((variant) => variant.uuid !== currentVariant.uuid ? variant : currVar)
            })
        })
        props.updateModalState(false);
    }

    function handleDelete(e) {
        e.preventDefault();
        let currVar = {
            ...currentVariant, hotspots: currentVariant.hotspots.filter((hotspot) => hotspot.id !== props.hotspot.id)
        };

        setCurrentVariant(currVar);
        setConfig({
            ...config,
            products: config.products.map((product) => product.uuid !== currentProduct.uuid ? product : {
                ...currentProduct, variants: currentProduct.variants.map((variant) => variant.uuid !== currentVariant.uuid ? variant : currVar)
            })
        })
        props.updateModalState(false);
    }

    return (
        <Modal canShow={props.canShow} id="edit-hotspot-modal">
            <CloseButton closeModal={() => {
                setValue(props.hotspot.content);
                props.updateModalState(false);
            }} />
            <h2 className="edit-hotspot-modal__title">
                Edit Hotspot
            </h2>

            <div className="edit-hotspot-modal__list">
                <form className="edit-hotspot-modal__form">
                    <label>Hotspot Name</label>
                    <input
                        className="edit-hotspot-modal__input"
                        type="text" value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="edit-hotspot-modal__buttons">
                        <ActionButtonStandard label="Save" handleClick={handleSave} />
                        <ActionButtonStandard label="Delete" handleClick={handleDelete} />
                    </div>
                </form>
            </div>
        </Modal>
    )
}
