import { useState, useEffect } from 'react'
import PageTitle from '../common/PageTitle';

const DataImport = () => {
    const [file, setFile] = useState('');
    const [schema, setSchema] = useState('');
    const [uploadSchemas, setUploadSchemas] = useState([]);

    // file to submit
    const [fileName, setFileName] = useState('Choose file');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    useEffect(() => {
        const getUploadSchemas = async () => {
            try {
                const response = await fetch('/api/v1.0/import/', { method: 'GET'});
                if(response.status === 200) {
                    const jsonData = await response.json();
                    //console.log(jsonData.data);
                    setUploadSchemas(jsonData.data);
                }
            } catch(err) {
                console.error(err);
            }
        };
        
        getUploadSchemas();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(!schema) {
            alert("im not okay");
            return false;
        }
        if(!file) {
            alert("im not okay 2");
            return false;
        }
        
        const formData = new FormData();
        formData.append('file', file);
        console.log(`Uploading file to ${schema}`)
        try {
            const res = await fetch(`/api/v1.0/import/${schema}`, {
                method: 'POST',
                body: formData
            });
            //console.log(res);
            if(res.status === 200) {
                const resData = await res.json();
                //console.log(resData);
                alert("Upload successful");
            } else {
                console.log("Error " + res.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <PageTitle>Data Import</PageTitle>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="schema" className="form-label">Upload Schema</label>
                    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example" 
                        id="schema" defaultValue="blank" onChange={v => {setSchema(v.target.value)}}>
                            <option key="blank">Choose upload schema</option>
                            {uploadSchemas && uploadSchemas.length && uploadSchemas.map((value) => {
                                return <option key={value.schema} value={value.schema}>{value.name}</option>
                            })}
                    </select>
                </div>
                <div className="mb-3">
                    <input className="form-control form-control-sm" type="file" id="formFile" placeholder={fileName}
                        onChange={onChange} />
                </div>
                <input type="submit" className="btn btn-dark btn-block btn-sm" value="Import Data" />
            </form>
        </div>
    );
};

export default DataImport;
