import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './pages/menu/Navigation';
import Home from './pages/Home';
import ArticleListing from './pages/article/ArticleListing';
import DataImport from './pages/admin/DataImport';
import ConfigureUploadSchemas from './pages/admin/ConfigureUploadSchemas';
import About from './pages/About';
import Toasts from './components/ui/notification/Toast';
import Alert from './components/ui/notification/Alert'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useCloseAlert } from './components/util/alert-notification';

function App() {

    // toast messages
    const toasts = useSelector(state => state.toasts);
    const alert =  useSelector(state => state.alert);
    // close alert
    const closeAlert = useCloseAlert();

    return (
        <div>
            <Router>
                <Navigation id="navigation" brand="Stockpile"></Navigation>
                <div className="container" id="content">
                    <div>
                        <br />
                        <Alert show={alert.show} variant={alert.variant} title={alert.title} onClose={() => {
                            closeAlert()
                        }}>{alert.message}</Alert>
                    </div>
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/articles"><ArticleListing /></Route>
                        <Route path="/data-import"><DataImport /></Route>
                        <Route path="/admin/configure-upload-schemas"><ConfigureUploadSchemas /></Route>
                        <Route path="/about"><About /></Route>
                    </Switch>
                </div>
            </Router>
            <Toasts toasts={toasts}></Toasts>
        </div>
    );
}

export default App;
