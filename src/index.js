import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Content from "./components/Content";
import Profile from "./components/Profile";
import Form from "./components/Form";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <div>
            <div>
                <Header />
                <Nav />
                <Route exact path="/" component={Content}/>
                <Route path="/index" component={Content}/>
                <Route path="/profile/:bangumiId" component={Profile}/>
                <Route path="/from/:bangumiId" component={Form}/>
            </div>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
