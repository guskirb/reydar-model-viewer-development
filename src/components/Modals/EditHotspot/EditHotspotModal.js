import "./EditHotspotModal.scss";

import { useEffect } from "react"

import CloseButton from "../../Buttons/Close/CloseButton"
import Modal from "../Modal/Modal"

export const EditHotspotModal = (props) => {

    useEffect(() => {
        console.log(props.currentVariant);
    }, [props.currentVariant]);

    return (
        <Modal canShow={props.canShow} id="edit-hotspot-modal">
            <CloseButton closeModal={() => props.updateModalState(false)} />
            <h2 className="edit-hotspot-modal__title">
                Edit Hotspots
            </h2>

            <div className="edit-hotspot-modal__list">
                {props.currentVariant.hotspots ? props.currentVariant.hotspots.map((hotspot, index) => (
                    <div key={index}>
                        <h3>{hotspot.content}</h3>
                    </div>
                )) : null}
            </div>
        </Modal>
    )
}
