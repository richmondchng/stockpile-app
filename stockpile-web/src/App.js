import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/pages/common/Navigation';
import Home from './components/pages/Home';
import ArticleListing from './components/pages/article/ArticleListing';
import DataImport from './components/pages/DataImport';
import ConfigureUploadSchemas from './components/pages/admin/ConfigureUploadSchemas';
import About from './components/pages/About';

function App() {

    return (
        <div>
            <Router>
                <Navigation id="navigation" brand="Stockpile"></Navigation>
                <div className="container" id="content">
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/articles"><ArticleListing /></Route>
                        <Route path="/data-import"><DataImport /></Route>
                        <Route path="/admin/configure-upload-schemas"><ConfigureUploadSchemas /></Route>
                        <Route path="/about"><About /></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
