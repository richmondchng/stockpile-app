import { useState, useEffect } from 'react';
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
const ImportSchemaModal = ({id, title, currentData, postSubmitAction, postCancelAction}) => {
    let update = currentData.schema;
    let method = update ? 'PUT' : 'POST';
    let action = update ? `/api/v1.0/schemas/${currentData.schema}` : `/api/v1.0/schemas`;
    let buttonLabel = update ? 'Update' : 'Add';
    let formId = `${id}-form`;
    let successMessage = update ? 'Record updated' : 'Record added';

    // alert
    const [alertInfo, setAlertInfo] = useState({
        show: false,
        msg: successMessage
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
    useEffect(() => {
        setModalData({
            name: currentData.name ? currentData.name : '',
            description: currentData.description ? currentData.description : '',
            topic: currentData.topic ? currentData.topic : '',
            schema: currentData.schema ? currentData.schema : ''
        });
    }, [currentData]);

    // close modal
    const handleCancelDialog = () => {
        setModalData({name: "", description: "", topic: ""});
        setAlertInfo({...alertInfo, show: false,});
        setAlertError({...alertError, show: false,});
        setDisableButton(false);
        console.log("closing");
        postCancelAction();
    };
    // submit form
    const handleSubmitDialog = async (e) => {
        e.preventDefault();

        console.log(`submitting form ${JSON.stringify(modalData)} ${method} ${action}`);
        try {
            const res = await fetch(action, {
                method: method,
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
                    ...alertInfo,
                    show: true
                });
                postSubmitAction();
            } else {
                //console.log("Error " + res.status);
                const resData = await res.json();
                console.log("Error " + res.status + " " +  JSON.stringify(resData));
                setAlertError({
                    show: true,
                    msg: resData.message
                });
            }
        } catch(err) {
            // setAlertError({
            //     show: true,
            //     msg: err
            // });
            console.error(err);
        }
    }

    return (
        <Modal id={id} title={title} closeAction={handleCancelDialog}>
            <ModalBody>
                <InfoAlert show={alertInfo.show}>{alertInfo.msg}</InfoAlert>
                <ErrorAlert show={alertError.show}>{alertError.msg}</ErrorAlert>
                <Form id={formId} submitAction={handleSubmitDialog}>
                    <TextInput id="schemaName" label="Schema Name" placeholder="schema name" value={modalData.name}
                        changeAction={(e) => {
                            setModalData({...modalData, name: e.target.value})
                        }}></TextInput>
                    {modalData.schema && 
                        <TextInput id="schemaSchema" label="Resource" value={modalData.schema} readOnly={true} />
                    }
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
            <ModalButtonBar modalId={formId} closeAction={handleCancelDialog}>
                <Button id={`${formId}-submit-btn`} form={formId} type="submit" disabled={disableButton}>{buttonLabel}</Button>
            </ModalButtonBar>
        </Modal>
    )
}

// prop types
ImportSchemaModal.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    postSubmitAction: PropTypes.func,
    postCancelAction: PropTypes.func,
    currentData : PropTypes.object,
}
// default props
ImportSchemaModal.defaultProps = {
    title: "Modal",
    postSubmitAction: () => {},
    postCancelAction: () => {},
    currentData: {
        name: "",
        description: "",
        topic: ""
    }
}

export default ImportSchemaModal
