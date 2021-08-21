import { useState, useEffect } from 'react'
import PageTitle from '../../components/common/PageTitle';
import ImportSchemaModal from '../../components/features/importer/ImportSchemaModal';
import { ModalOpenButton } from '../../components/common/ui/ModalDialog';
import { Button } from '../../components/common/form/FormInputs';
import { InfoAlert, ErrorAlert } from '../../components/common/ui/Alerts';

/**
 * Screen to view and configure upload schema.
 * @returns function
 */
const ConfigureUploadSchemas = () => {
    // list of upload schemas
    const [uploadSchemas, setUploadSchemas] = useState([]);
    const [reloadTable, setReloadTable] = useState(0);
    const [currentData, setCurrentData] = useState({
        name: "",
        description: "",
        topic: ""
    });
    // alert
    const [alertInfo, setAlertInfo] = useState({
        show: false,
        msg: ""
    });
    const [alertError, setAlertError] = useState({
        show: false,
        msg: "" 
    });

    // get list of upload schemas to populate table
    useEffect(() => {
        const getUploadSchemas = async () => {
            console.log("get available schemas");
            try {
                const response = await fetch('/api/v1.0/schemas', { method: 'GET'});
                if(response.status === 200) {
                    const jsonData = await response.json();
                    console.log("get available schemas " + jsonData);
                    setUploadSchemas(jsonData.data);
                } else if(response.status == 204) {
                    // no data
                    console.log("no available schemas ");
                    setUploadSchemas([]);
                }
            } catch(err) {
                console.error(err);
            }
        };
        getUploadSchemas();
    }, [reloadTable]);

    const deleteImportSchemaDetails = async (schema) => {
        console.log(`Delete ${JSON.stringify(schema)}`);
        if(window.confirm(`Confirm delete schema: ${schema.name}?`)) {
            console.log("confirmed");
            try {
                const res = await fetch(`/api/v1.0/schemas/${schema.schema}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                if(res.status === 200) {
                    // reload table
                    setAlertInfo({
                        msg: 'Record deleted',
                        show: true
                    });
                    setReloadTable(reloadTable + 1);
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
    }

    return (
        <div>
            <PageTitle>Configure Upload Schemas</PageTitle>
            <InfoAlert show={alertInfo.show}>{alertInfo.msg}</InfoAlert>
            <ErrorAlert show={alertError.show}>{alertError.msg}</ErrorAlert>
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
                                <ModalOpenButton target="update-schema" onClick={() => {setCurrentData(value)}}><i className="bi bi-pencil-square"></i></ModalOpenButton>
                                &nbsp;
                                <Button onClick={() => {deleteImportSchemaDetails(value)}}><i className="bi bi-trash"></i></Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr><td colSpan="5" align="right"><ModalOpenButton target="insert-schema">Add New</ModalOpenButton></td></tr>
                </tfoot>
            </table>
            <ImportSchemaModal id="insert-schema" title="New Upload Schema Configuration" 
                postSubmitAction={() => {setReloadTable(reloadTable + 1)}}></ImportSchemaModal>
            <ImportSchemaModal id="update-schema" title="Update Upload Schema Configuration" 
                currentData={currentData}
                postSubmitAction={() => {setReloadTable(reloadTable + 1)}}></ImportSchemaModal>
        </div>
    )
}

export default ConfigureUploadSchemas