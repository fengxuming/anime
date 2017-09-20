import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Form from "./components/Form";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router >
            <div>
                <Header />
                <Nav />
                    <Route path="/index" component={Content}/>
                    <Route path="/profile/:bangumiId" component={Profile}/>
                    <Route path="/from/:bangumiId" component={Form}/>
            </div>
        </Router>
    );
  }
}

export default App;
