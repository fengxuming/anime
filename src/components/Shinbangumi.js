/**
 * Created by fengxuming on 2017/8/8.
 */
import React, { Component } from 'react';
import './Shinbangumi.css';
import {
    Link
} from 'react-router-dom'

class Shinbangumi extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="box">
                    <div className="box-headerwith-border">
                        <div className="weekDay"><span style={{padding:"5px"}}>{this.props.weekDay}</span></div>
                        <div className="box-titletitle inline" style={{fontSize:"14px"}}>{this.props.bangumiName}</div>
                        <div className="box-tools pull-right">
                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                            </button>
                            <div className="btn-group">

                            </div>
                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                        </div>
                    </div>
                    <div className="box-body">
                        <Link to={"/profile/"+this.props.bangumiId}><img  className="bangumiCover"  src={"http://localhost:3004/"+this.props.cover}></img></Link>
                    </div>

                    <div className="box-footer">
                    </div>

                </div>
            </div>



        );
    }
}

export default Shinbangumi;

















