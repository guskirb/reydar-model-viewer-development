import "./EditHotspotModal.scss";

import CloseButton from "../../Buttons/Close/CloseButton"
import Modal from "../Modal/Modal"
import { useEffect } from "react";

export const EditHotspotModal = (props) => {

    useEffect(() => {
        console.log(props.hotspot)
    }, [props])

    return (
        <Modal canShow={props.canShow} id="edit-hotspot-modal">
            <CloseButton closeModal={() => props.updateModalState(false)} />
            <h2 className="edit-hotspot-modal__title">
                Edit Hotspot
            </h2>

            <div className="edit-hotspot-modal__list">
                <form>
                    <label />
                    <input type="text" value={props.hotspot.content} />
                </form>
            </div>
        </Modal>
    )
}
