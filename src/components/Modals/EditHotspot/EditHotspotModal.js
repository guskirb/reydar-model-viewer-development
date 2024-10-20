import "./EditHotspotModal.scss";

import { useEffect, useState } from "react";

import CloseButton from "../../Buttons/Close/CloseButton"
import Modal from "../Modal/Modal"
import { useCurrentVariant } from "../../../contexts/useCurrentVariant";
import { useCurrentProduct } from "../../../contexts/useCurrentProduct";
import { useConfig } from "../../../contexts/useConfig";
import ActionButtonStandard from "../../Buttons/Action/ActionButtonStandard";
import { HotspotColor } from "../../Buttons/HotspotColor/HotspotColor";

export const EditHotspotModal = (props) => {
    const [config, setConfig] = useConfig();
    const [currentVariant, setCurrentVariant] = useCurrentVariant();
    const [currentProduct] = useCurrentProduct();
    const [value, setValue] = useState(props.hotspot.content ? props.hotspot.content : "");
    const [color, setColor] = useState();

    useEffect(() => {
        setColor(config["hotspot-color"]);
    }, [config])

    function handleSave(e) {
        e.preventDefault();
        let currVar = {
            ...currentVariant, hotspots: currentVariant.hotspots.map((hotspot) => hotspot.id !== props.hotspot.id ? hotspot : {
                ...hotspot,
                content: value,
            })
        };
        const documentRoot = document.documentElement;
        config["hotspot-color"] = color;
        documentRoot.style.setProperty("--hotspot-color", color);

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
                    <label>Name</label>
                    <input
                        className="edit-hotspot-modal__input"
                        type="text" value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <div className="edit-hotspot-modal__buttons">
                        <ActionButtonStandard label="Save" handleClick={handleSave} />
                        <ActionButtonStandard label="Delete" handleClick={handleDelete} />
                        <HotspotColor color={color} setColor={setColor} />
                    </div>
                </form>
            </div>
        </Modal>
    )
}
