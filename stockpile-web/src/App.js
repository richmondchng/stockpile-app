import './App.css';
import DataImport from './components/DataImport';

function App() {
    return (
        <div className='container'>
            <h2>Hello world</h2>
            <DataImport schema='articles' />
        </div>
    );
}

export default App;
