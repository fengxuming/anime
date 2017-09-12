/**
 * Created by fengxuming on 2017/8/31.
 */
import React, { Component } from 'react';
import './BangumiInfo.css';

class BangumiInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        // let casts = this.props.cast.map(function (options,iterator) {
        //     return (
        //         <li><a href="#"><i className="fa fa-circle-o text-red"></i>{options}</a></li>
        //     )
        // });
        // let staffs = this.props.staff.map(function (options,iterator) {
        //     return (
        //         <li><a href="#"><i className="fa fa-circle-o text-light-blue"></i>{options}</a></li>
        //     )
        // });


        return(
            <div className="col-md-4">
                <div className="box box-primary">
                    <div className="box-body box-profile">
                        <img className="profile-user-img img-responsive img-rounded" style={{width:"200px"}} src={"http://localhost:3004/"+this.props.bangumi.cover} alt="User profile picture"/>

                        <h3 className="profile-username text-center">{this.props.bangumi.name}</h3>

                        <p className="text-muted text-center">{this.props.bangumi.credit}</p>

                        <ul className="list-group list-group-unbordered">
                            <li className="list-group-item">
                                <b>播出时间</b> <a className="pull-right">{this.props.bangumi.startDate+"---"+this.props.bangumi.endDate}</a>
                            </li>
                            {/*<li className="list-group-item">*/}
                                {/*<b>中国</b> <a className="pull-right">{this.props.bangumi.playerStationInChina}</a>*/}
                            {/*</li>*/}
                            {/*<li className="list-group-item">*/}
                                {/*<b>日本</b> <a className="pull-right">{this.props.bangumi.playerStationInJapan}</a>*/}
                            {/*</li>*/}
                        </ul>

                        <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                    </div>

                </div>

                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">CAST</h3>
                    </div>

                    <div className="box-body">
                        <ul className="nav nav-pills nav-stacked">
                            {/*{casts}*/}
                        </ul>
                    </div>

                </div>

                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">STAFF</h3>
                    </div>

                    <div className="box-body">
                        <ul className="nav nav-pills nav-stacked">
                            {/*{staffs}*/}
                        </ul>
                    </div>

                </div>

            </div>

        );
    }



}


export default BangumiInfo;