/**
 * Created by fengxuming on 2017/9/11.
 */
import React, { Component } from 'react';
import './Form.css';
import $ from "../util/request";


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
        return(
            <div className="content">
                <div className="box box-info ">
                    <div className="box-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">名称</label>

                                <div className="col-sm-10">
                                    <input className="form-control" id="name" placeholder="名称" type="text"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">制作公司</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="credit" placeholder="制作公司" type="text"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">播放日期</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="showOn" min="0" max="6" placeholder="播放日期" type="number"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">播放日期</label>
                                <div className="col-sm-10">
                                    <select id="showOn" className="form-control">
                                        <option selected="selected" value="0">周日</option>
                                        <option value="1">周一</option>
                                        <option value="2">周二</option>
                                        <option value="3">周三</option>
                                        <option value="4">周四</option>
                                        <option value="5">周五</option>
                                        <option value="6">周六</option>
                                    </select>
                                </div>
                            </div>


                        </form>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"/> Remember me
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );

    }

}


export default Form;