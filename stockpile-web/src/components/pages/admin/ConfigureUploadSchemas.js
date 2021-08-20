import { useState, useEffect } from 'react'
import PageTitle from '../../common/PageTitle';
import ImportSchemaModal from '../../features/importer/ImportSchemaModal';

/**
 * Screen to view and configure upload schema.
 * @returns function
 */
const ConfigureUploadSchemas = () => {
    // list of upload schemas
    const [uploadSchemas, setUploadSchemas] = useState([]);
    const [reloadTable, setReloadTable] = useState(0);

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
            <ImportSchemaModal id="insert-schema" title="New Upload Schema Configuration" 
                postSubmitAction={() => {setReloadTable(reloadTable + 1)}}
                ></ImportSchemaModal>
        </div>
    )
}

export default ConfigureUploadSchemas
