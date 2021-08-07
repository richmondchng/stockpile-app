import { useState, useEffect } from 'react'
import PageTitle from '../../common/PageTitle';
import PopupModal from '../../common/popup/PopupModal';
import PopupModalBody from '../../common/popup/PopupModalBody';
import PopupModalButtonBar from '../../common/popup/PopupModalButtonBar';
import Form from '../../common/form/Form';
import TextInput from '../../common/form/TextInput';
import Button from '../../common/form/Button';

/**
 * Screen to view and configure upload schema.
 * @returns function
 */
const ConfigureUploadSchemas = () => {

    // list of upload schemas
    const [uploadSchemas, setUploadSchemas] = useState([]);
    const [reloadTable, setReloadTable] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    // current selected schema
    const [schemaName, setSchemaName] = useState("");
    const [schemaDesc, setSchemaDesc] = useState("");
    const [schemaTopic, setSchemaTopic] = useState("");
    const [newSchema, setNewSchema] = useState({
        name: schemaName,
        description: schemaDesc,
        topic: schemaTopic,
    });
    // const [currentSchema, setCurrentSchema] = useState({
    //     name: schemaName,
    //     description: schemaDesc,
    //     topic: schemaTopic,
    // });

    // get list of upload schemas to populate table
    useEffect(() => {
        const getUploadSchemas = async () => {
            console.log("get available schemas");
            try {
                const response = await fetch('/api/v1.0/schemas', { method: 'GET'});
                if(response.status === 200) {
                    const jsonData = await response.json();
                    setUploadSchemas(jsonData.data);
                }
            } catch(err) {
                console.error(err);
            }
        };
        getUploadSchemas();
    }, [reloadTable]);

    useEffect(() => {
        setNewSchema({
            name: schemaName,
            description: schemaDesc,
            topic: schemaTopic,
        });
    }, [schemaName, schemaDesc, schemaTopic])

    // close add dialog modal
    const handleCancelAddDialog = () => {
        //setNewSchema({name: "", description: "", topic: ""});
        setSchemaName("");
        setSchemaDesc("");
        setSchemaTopic("");
        setDisableButton(false);
        console.log("closing ");
    };
    // submit add form
    const handleSubmitAddDialog = async (e) => {
        e.preventDefault();

        console.log(`submitting form`);
        try {
            const res = await fetch(`/api/v1.0/schemas`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data: [newSchema]})
            });
            if(res.status === 200) {
                // reload table
                // document.getElementById("insert-schema").toggle();
                setDisableButton(true);
                setReloadTable(reloadTable + 1);
            } else {
                console.log("Error " + res.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <PageTitle>Configure Upload Schemas</PageTitle>
            <table className="table caption-top table-bordered table-striped table-hover">
                <caption>List of upload schema</caption>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Schema</th>
                        <th scope="col">Description</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {uploadSchemas.map((value) => {
                        return (
                        <tr key={value.schema}>
                            <td>{value.name}</td>
                            <td>{value.schema}</td>
                            <td>{value.description}</td>
                            <td>{value.topic}</td>
                            <td align="right">
                                {/* <button key={"btn-{value.schema}"} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateSchema"
                                    onClick={() => {onEditClick(value)}
                                    }>
                                    <i className="bi bi-pencil-square"></i>
                                </button> */}
                                &nbsp;
                                <button type="button" className="btn btn-primary">                                    
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <div align="right">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#insert-schema">Add New</button>
            </div>
            <PopupModal id="insert-schema" title="New Upload Schema Configuration" closeAction={handleCancelAddDialog}>
                <PopupModalBody>
                    <Form id="add-form" submitAction={handleSubmitAddDialog}>
                        <TextInput id="schemaName" label="Schema Name" placeholder="schema name"
                            changeAction={(e) => {
                                setSchemaName(e.target.value)
                            }}></TextInput>
                        <TextInput id="schemaDesc" label="Schema Description" placeholder="short description"
                            changeAction={(e) => {
                                setSchemaDesc(e.target.value)
                            }}></TextInput>
                        <TextInput id="schemaTopic" label="Consumer Topic" placeholder="topic name"
                            changeAction={(e) => {
                                setSchemaTopic(e.target.value)
                            }}></TextInput>
                    </Form>
                </PopupModalBody>
                <PopupModalButtonBar closeAction={handleCancelAddDialog}>
                    <Button form='add-form' type="submit" disabled={disableButton}>Add</Button>
                </PopupModalButtonBar>
            </PopupModal>
        </div>
    )
}

export default ConfigureUploadSchemas
