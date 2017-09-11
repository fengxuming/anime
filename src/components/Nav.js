/**
 * Created by fengxuming on 2017/8/3.
 */
import React, { Component } from 'react';
import './Nav.css';
import {
    Link
} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <Link to="/index" className="Nav-point">首页</Link>
            </div>
        );
    }
}

export default Nav;