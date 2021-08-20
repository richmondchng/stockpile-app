import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalButtonBar } from '../../common/ui/ModalDialog';
import { InfoAlert, ErrorAlert } from '../../common/ui/Alerts'
import Form from '../../common/form/Form';
import { TextInput, Button } from '../../common/form/FormInputs';

/**
 * Import schema pop up dialog box
 * @param {*} param0 
 * @returns 
 */
const ImportSchemaModal = ({id, title, postSubmitAction, postCancelAction}) => {
    // alert
    const [alertInfo, setAlertInfo] = useState({
        show: false,
        msg: "" 
    });
    const [alertError, setAlertError] = useState({
        show: false,
        msg: "" 
    });
    const [disableButton, setDisableButton] = useState(false);

    // form data
    const [modalData, setModalData] = useState({
        name: "",
        description: "",
        topic: ""
    });

    // close modal
    const handleCancelDialog = () => {
        setModalData({name: "", description: "", topic: ""});
        setAlertInfo({...alertInfo, show: false,});
        setAlertError({...alertInfo, show: false,});
        setDisableButton(false);
        console.log("closing ");
        postCancelAction();
    };
    // submit form
    const handleSubmitDialog = async (e) => {
        e.preventDefault();

        console.log(`submitting form ${JSON.stringify(modalData)}`);
        try {
            const res = await fetch(`/api/v1.0/schemas`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: [modalData]})
            });
            if(res.status === 200) {
                // reload table
                setDisableButton(true);
                setAlertInfo({
                    show: true,
                    msg: "Record added"
                });
                postSubmitAction();
            } else {
                const resData = await res.json();
                setAlertError({
                    show: true,
                    msg: resData.message
                });
                console.log("Error " + res.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <Modal id={id} title={title} closeAction={handleCancelDialog}>
            <ModalBody>
                <InfoAlert show={alertInfo.show}>{alertInfo.msg}</InfoAlert>
                <ErrorAlert show={alertError.show}>{alertError.msg}</ErrorAlert>
                <Form id="add-form" submitAction={handleSubmitDialog}>
                    <TextInput id="schemaName" label="Schema Name" placeholder="schema name" value={modalData.name}
                        changeAction={(e) => {
                            setModalData({...modalData, name: e.target.value})
                        }}></TextInput>
                    <TextInput id="schemaDesc" label="Schema Description" placeholder="short description" value={modalData.description}
                        changeAction={(e) => {
                            setModalData({...modalData, description: e.target.value})
                        }}></TextInput>
                    <TextInput id="schemaTopic" label="Consumer Topic" placeholder="topic name" value={modalData.topic}
                        changeAction={(e) => {
                            setModalData({...modalData, topic: e.target.value})
                        }}></TextInput>
                </Form>
            </ModalBody>
            <ModalButtonBar closeAction={handleCancelDialog}>
                <Button form='add-form' type="submit" disabled={disableButton}>Add</Button>
            </ModalButtonBar>
        </Modal>
    )
}

// prop types
ImportSchemaModal.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    postSubmitAction: PropTypes.func,
    postCancelAction: PropTypes.func
}
// default props
ImportSchemaModal.defaultProps = {
    title: "Modal",
    postSubmitAction: () => {},
    postCancelAction: () => {}
}

export default ImportSchemaModal
