import { useState, useEffect } from 'react'
import PageTitle from '../../common/PageTitle';

const ConfigureUploadSchemas = () => {

    const [uploadSchemas, setUploadSchemas] = useState([]);
    const [currentSchema, setCurrentSchema] = useState({
        schema: "",
        topic: ""
    });

    useEffect(() => {
        const getUploadSchemas = async () => {
            try {
                const response = await fetch('/api/v1.0/import/', { method: 'GET'});
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

    const onEditClick = (obj) => {
        let schemaVal = obj.schema ? obj.schema : "";
        let topicVal = obj.topic ? obj.topic : "";
        setCurrentSchema({
            schema: schemaVal,
            topic: topicVal
        });
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
                                <button key={"btn-{value.schema}"} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    onClick={() => {onEditClick(value)}
                                    }>
                                    <i className="bi bi-pencil-square"></i>
                                </button>&nbsp;
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
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add New</button>
            </div>
            {/* Vertically centered scrollable modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="schemaName" className="form-label">Schema Name</label>
                                    <input className="form-control form-control-sm" type="text" id="schemaName" placeholder="schema name" 
                                        value={currentSchema.schema} 
                                        onChange={(e) => {
                                            setCurrentSchema({...currentSchema, schema: e.target.value});
                                        }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="schemaTopic" className="form-label">Import Topic</label>
                                    <input className="form-control form-control-sm" type="text" id="schemaTopic" placeholder="import topic name" 
                                        value={currentSchema.topic} 
                                        onChange={(e) => {
                                            setCurrentSchema({...currentSchema, topic: e.target.value});
                                        }} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={(e) => {
                                            setCurrentSchema({schema: "", topic: ""});
                                        }}>Close</button>
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConfigureUploadSchemas
