import { useState, useEffect } from 'react'
import PageTitle from '../../common/PageTitle';
import PopupModal from '../../common/popup/PopupModal';
import PopupModalBody from '../../common/popup/PopupModalBody';
import PopupModalButtonBar from '../../common/popup/PopupModalButtonBar';

/**
 * Screen to view and configure upload schema.
 * @returns function
 */
const ConfigureUploadSchemas = () => {

    // list of upload schemas
    const [uploadSchemas, setUploadSchemas] = useState([]);
    // current selected schema
    const [currentSchema, setCurrentSchema] = useState({
        schema: "",
        topic: ""
    });

    // get list of upload schemas to populate table
    useEffect(() => {
        const getUploadSchemas = async () => {
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
    }, []);

    // cancel add dialog modal
    const onAddCancel = (e) => {
        setCurrentSchema({schema: "", topic: ""});
        console.log("closing " + e);
    };
    
    const onAddSubmit = async (e) => {
        e.preventDefault();
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
            <PopupModal id="insert-schema" title="New Upload Schema Configuration" onClose={onAddCancel}>
                <PopupModalBody>
                    <form id="add" onSubmit={onAddSubmit}>
                        <div className="mb-3">
                            <label htmlFor="schemaName" className="form-label">Schema Name</label>
                            <input className="form-control form-control-sm" type="text" id="schemaName" placeholder="schema name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="schemaTopic" className="form-label">Import Topic</label>
                            <input className="form-control form-control-sm" type="text" id="schemaTopic" placeholder="import topic name" />
                        </div>
                    </form>
                </PopupModalBody>
                <PopupModalButtonBar onCloseAction={onAddCancel}></PopupModalButtonBar>
            </PopupModal>
        </div>
    )
}

export default ConfigureUploadSchemas
