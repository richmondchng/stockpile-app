import { useState, useEffect } from 'react'
import PageTitle from '../../components/ui/PageTitle';
import ImportSchemaModal from '../../components/features/importer/ImportSchemaModal';
import Button from '../../components/ui/form/Button';
import { useWarningToast, useErrorToast } from '../../components/util/toast-notification';

/**
 * Screen to view and configure upload schema.
 * @returns function
 */
const ConfigureUploadSchemas = () => {

    const [showAdd, setShowAdd] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    // list of upload schemas
    const [uploadSchemas, setUploadSchemas] = useState([]);
    const [reloadTable, setReloadTable] = useState(0);
    const [currentData, setCurrentData] = useState({
        name: "",
        description: "",
        topic: ""
    });

    const showWarningToast = useWarningToast();
    const showErrorToast = useErrorToast();

    // get list of upload schemas to populate table
    useEffect(() => {
        const getUploadSchemas = async () => {
            //console.log("get available schemas");
            try {
                const response = await fetch('/api/v1.0/schemas', { method: 'GET'});
                if(response.status === 200) {
                    const jsonData = await response.json();
                    setUploadSchemas(jsonData.data);
                } else if(response.status === 204) {
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

    const resetForm = () => {
        setShowAdd(false);
        setShowUpdate(false);
        setCurrentData({
            name: "",
            description: "",
            topic: ""
        });
    }

    // delete import schema details
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
                    setReloadTable(reloadTable + 1);
                    showWarningToast('Record deleted');
                } else {
                    const resData = await res.json();
                    console.log("Error " + res.status + " " +  JSON.stringify(resData));
                    showErrorToast('Error deleting record');
                }
            } catch(err) {
                console.error("error=" + err);
                showErrorToast('Error deleting record');
            }
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
                                <Button onClick={() => {
                                    setCurrentData(value);
                                    setShowUpdate(true);
                                }}><i className="bi bi-pencil-square"></i></Button> {' '}
                                <Button onClick={() => {deleteImportSchemaDetails(value)}}><i className="bi bi-trash"></i></Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr><td colSpan="5" align="right">
                        <Button onClick={() => setShowAdd(true)}>Add New</Button>
                    </td></tr>
                </tfoot>
            </table>
            <ImportSchemaModal idx="insert-schema" title="New Upload Schema Configuration" show={showAdd}
                currentData={currentData}
                postSubmitAction={() => {
                    setReloadTable(reloadTable + 1);
                    resetForm();
                }}
                postCancelAction={() => resetForm()}>
            </ImportSchemaModal>
            <ImportSchemaModal idx="update-schema" title="Update Upload Schema Configuration" show={showUpdate}
                currentData={currentData}
                postSubmitAction={() => {
                    setReloadTable(reloadTable + 1);
                    resetForm();
                }}
                postCancelAction={() => resetForm()}>
            </ImportSchemaModal>
        </div>
    )
}

export default ConfigureUploadSchemas
