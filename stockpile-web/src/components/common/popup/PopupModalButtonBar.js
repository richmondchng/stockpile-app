import React from 'react'

const PopupModalButtonBar = ({onCloseAction}) => {
    return (
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onCloseAction}>Close</button>
        </div>
    )
}

export default PopupModalButtonBar
