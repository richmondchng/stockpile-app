import { useState, useEffect } from 'react'
import PageTitle from '../../common/PageTitle';

const UploadSchemas = () => {

    const [uploadSchemas, setUploadSchemas] = useState([]);

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

    return (
        <div>
            <PageTitle>Configure Upload Schemas</PageTitle>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Schema</th>
                        <th scope="col">Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {uploadSchemas.map((value) => {
                        return (
                        <tr>
                            <td>{value.name}</td>
                            <td>{value.schema}</td>
                            <td>{value.topic}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UploadSchemas
