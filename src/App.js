import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Content from "./components/Content";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
            <div>
                <Header />
                <Nav />

            </div>
    );
  }
}

export default App;
