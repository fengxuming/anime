/**
 * Created by fengxuming on 2017/8/31.
 */
import React, { Component } from 'react';
import './Profile.css';
import $ from "jquery";
import DataShow from "./DataShow";
import BangumiInfo from "./BangumiInfo";
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://localhost:3004/",
            bangumiId: props.match.params.bangumiId,
            bangumi: {},
            cast: [],
            staff: [],
            info: []
        }
    }
    componentDidMount(){
        $.get(this.state.host+"bangumimoes/"+this.state.bangumiId,function (bangumi) {
            this.setState({
                bangumi:bangumi,
                // cast:bangumi.cast,
                // staff:bangumi.staff,
                // info:bangumi.info
            })
        }.bind(this));


    }
    render() {
        return(
            <div className="content">
                <BangumiInfo
                    bangumi={this.state.bangumi}
                    // cast = {this.state.cast}
                    // staff = {this.state.staff}
                />
                <DataShow
                    bangumi={this.state.bangumi}
                    // info={this.state.info}
                />
            </div>

         );
    }



}


export default Profile;