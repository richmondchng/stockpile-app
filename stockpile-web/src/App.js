import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import DataImport from './components/pages/DataImport';
import ArticleListing from './components/pages/ArticleListing';

function App() {

    return (
        <div className='container-fluid'>
            <Router>
                <NavBar id="navigation"></NavBar>
                <div className="container" id="content">
                    <Switch>
                        <Route path="/articles"><ArticleListing /></Route>
                        <Route path="/data-import"><DataImport /></Route>
                        <Route path="/about"><About /></Route>
                        <Route exact path="/"><Home /></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
