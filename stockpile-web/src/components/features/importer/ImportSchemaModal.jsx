import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../ui/modal/Modal';
import ModalBody from '../../ui/modal/ModalBody';
import ModalFooter from '../../ui/modal/ModalFooter';
import Form from '../../ui/form/Form';
import Button from '../../ui/form/Button';
import TextInput from '../../ui/form/TextInput';
import Alert from '../../ui/notification/Alert';
import { useDispatch } from 'react-redux';
import { showInfo } from '../../../redux/actions/toastActions';

/**
 * Import schema pop up dialog box
 * @param {*} param0 
 * @returns 
 */
const ImportSchemaModal = ({idx, title, show, currentData, postSubmitAction, postCancelAction}) => {
    const update = currentData.schema;
    const method = update ? 'PUT' : 'POST';
    const action = update ? `/api/v1.0/schemas/${currentData.schema}` : `/api/v1.0/schemas`;
    const buttonLabel = update ? 'Update' : 'Add';
    const formId = `${idx}-form`;

    const dispatch = useDispatch();
    // let successMessage = update ? 'Record updated' : 'Record added';
    // // alert
    // const [alertInfo, setAlertInfo] = useState({
    //     show: false,
    //     msg: successMessage
    // });
    // const [alertError, setAlertError] = useState({
    //     show: false,
    //     msg: "" 
    // });

    const [disableButton, setDisableButton] = useState(false);
    const [showError, setShowError] = useState({
        show: false,
        msg: ""
    });

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
        setShowError({...showError, show: false,});
        setDisableButton(false);
        console.log("closing");
        postCancelAction();
    };
    // submit form
    const handleSubmitDialog = async (e) => {
        e.preventDefault();

        console.log(`submitting form ${JSON.stringify(modalData)} ${method} ${action}`);
        try {
            setDisableButton(true);

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
                // setDisableButton(true);
                // setAlertInfo({
                //     ...alertInfo,
                //     show: true
                // });
                dispatch(showInfo("Record added"));
                postSubmitAction();
            } else {
                //console.log("Error " + res.status);
                const resData = await res.json();
                console.log("Error " + res.status + " " +  JSON.stringify(resData));
                setShowError({
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
        <Modal title={title} show={show} closeAction={handleCancelDialog}>
            <ModalBody>
                <Alert show={showError.show} title="Error" variant="danger" 
                    onClose={() => {
                        setShowError({...showError, show: false});
                        setDisableButton(false);
                    }}>{showError.msg}</Alert>
                <Form idx={formId} onSubmit={handleSubmitDialog}>
                     <TextInput idx="schemaName" label="Schema Name" placeholder="schema name" value={modalData.name}
                         onChange={(e) => {
                             setModalData({...modalData, name: e.target.value})
                         }}></TextInput>
                     {modalData.schema && 
                         <TextInput idx="schemaSchema" label="Resource" value={modalData.schema} readOnly={true} />
                     }
                     <TextInput idx="schemaDesc" label="Schema Description" placeholder="short description" value={modalData.description}
                        onChange={(e) => {
                             setModalData({...modalData, description: e.target.value})
                         }}></TextInput>
                     <TextInput idx="schemaTopic" label="Consumer Topic" placeholder="topic name" value={modalData.topic}
                         onChange={(e) => {
                             setModalData({...modalData, topic: e.target.value})
                         }}></TextInput>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleCancelDialog}>Close</Button>
                <Button type="submit" form={formId} variant="primary" disabled={disableButton}>{buttonLabel}</Button>
            </ModalFooter>
        </Modal>
    )
}

// prop types
ImportSchemaModal.propTypes = {
    idx: PropTypes.string.isRequired,
    title: PropTypes.string,
    show: PropTypes.bool.isRequired,
    postSubmitAction: PropTypes.func,
    postCancelAction: PropTypes.func,
    currentData : PropTypes.object,
}
// default props
ImportSchemaModal.defaultProps = {
    title: "Modal",
    show: false,
    postSubmitAction: () => {},
    postCancelAction: () => {},
    currentData: {
        name: "",
        description: "",
        topic: ""
    }
}

export default ImportSchemaModal
