/**
 * Created by fengxuming on 2017/8/3.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <img src={logo} className="Header-logo" alt="logo" />
                <span className="Header-site-title">柏林日记的小站</span>
            </div>
        );
    }
}

export default Header;