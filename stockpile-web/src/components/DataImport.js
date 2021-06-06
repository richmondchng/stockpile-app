import {useState} from 'react'

const DataImport = ({schema}) => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('Choose file');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        console.log(`Uploading file to ${schema}`)
        try {
            const res = await fetch(`http://localhost:8090/api/v1.0/import/${schema}`, {
                method: 'POST',
                body: formData
            });
            //console.log(res);
            if(res.status === 200) {
                const resData = await res.json();
                console.log(resData);
            } else {
                console.log("Error " + res.status);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Import data</label>
                    <input className="form-control" type="file" id="formFile" placeholder={fileName} onChange={onChange} />
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Import Data" />
            </form>
        </div>
    );
};

export default DataImport;
