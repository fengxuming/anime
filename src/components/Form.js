/**
 * Created by fengxuming on 2017/9/11.
 */
import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://localhost:3004/",
            bangumiId: props.match.params.bangumiId,
            bangumi:{},
        }
    }

    componentDidMount(){
        $.get(this.state.host+"bangumimoes/"+this.state.bangumiId,function (bangumi) {
            this.setState({
                bangumi:bangumi,
            })
        }.bind(this));
    }
    render() {

    }

}


export default Form;