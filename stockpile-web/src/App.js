import './App.css';
import {useState, useEffect} from 'react';
import NavBar from './components/common/NavBar';
import DataImport from './components/DataImport';
import AlertMessage from './components/AlertMessage';

function App() {

    const [successMessage, setSuccessMessage] = useState('');

    const [message, setMessage] = useState({
        messageStyle: "info",
        message: "Hello",
        show: false
    });

    return (
        <div className='container-fluid'>
            <NavBar id="navigation"></NavBar>
            {/* <AlertMessage message={message.message} messageStyle={message.messageStyle} show={message.show} /> */}
            <div className="container" id="content">
                <DataImport schema='articles' />
            </div>
        </div>
    );
}

export default App;
