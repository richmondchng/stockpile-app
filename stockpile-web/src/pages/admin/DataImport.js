import { useState, useEffect } from 'react'
import PageTitle from '../../components/ui/PageTitle';
import Form from '../../components/ui/form/Form';
import DropdownInput from '../../components/ui/form/DropdownInput';
import FileInput from '../../components/ui/form/FileInput';
import Button from '../../components/ui/form/Button';

/**
 * Data import screen
 * @returns 
 */
const DataImport = () => {
    const [disableButton, setDisableButton] = useState(false);
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
                const response = await fetch('/api/v1.0/schemas', { method: 'GET'});
                if(response.status === 200) {
                    const jsonData = await response.json();
                    //console.log(jsonData.data);
                    setUploadSchemas(jsonData.data.map((value) => {
                        return { key: value.schema, value : value.name};
                    }));
                    // setUploadSchemas(jsonData.data);
                }
            } catch(err) {
                console.error(err);
            }
        };
        
        getUploadSchemas();
    }, []);

    // submit upload file
    const onSubmit = async (e) => {
        e.preventDefault();

        if(!schema) {
            alert("Schema is required");
            return false;
        }
        if(!file) {
            alert("File is required");
            return false;
        }
        
        const formData = new FormData();
        formData.append('file', file);
        console.log(`Uploading file to ${schema}`)
        try {
            setDisableButton(true);
            const res = await fetch(`/api/v1.0/schemas/${schema}`, {
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
        } finally {
            setDisableButton(false);
        }
    }

    return (
        <div>
            <PageTitle>Data Import</PageTitle>
            <Form onSubmit={onSubmit}>
                <DropdownInput idx="schema" placeholder="Select an import schema" label="Upload Schema" 
                    data={uploadSchemas} onChange={v => {setSchema(v.target.value)}}></DropdownInput>
                <FileInput idx="formFile" label="Upload File (CSV)" placeholder={fileName}
                        onChange={onChange}></FileInput>
                <Button type="submit" disabled={disableButton}>Import Data</Button>
            </Form>
        </div>
    );
};

export default DataImport;
