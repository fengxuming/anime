import React, { Component } from 'react';
import './Content.css';
import Shinbangumi from "./Shinbangumi";
import $ from "jquery";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host:"localhost:3004",
            boxOptions :[],
            sunarray:[],
            monarray:[],
            tuearray:[],
            wedarray :[],
            thuarray:[],
            friarray:[],
            satarray:[]
        };
    }

    componentDidMount(){
        var boxOptions = [{
            bangumiName: 'Collapsable',
            info: 'The body of the box'
        }];
        var sunarray =[];
        var monarray=[];
        var tuearray=[];
        var wedarray =[];
        var thuarray=[];
        var friarray=[];
        var satarray=[];

        // $.get("http://localhost:3004/bangumis",function (result) {
        //     this.setState({
        //         boxOptions:result
        //     })
        // }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=0",function (result) {
            this.setState({
                sunarray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=1",function (result) {
            this.setState({
                monarray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=2",function (result) {
            this.setState({
                tuearray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=3",function (result) {
            this.setState({
                wedarray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=4",function (result) {
            this.setState({
                thuarray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=5",function (result) {
            this.setState({
                friarray:result
            })
        }.bind(this));
        $.get("http://localhost:3004/bangumimoes?showOn=6",function (result) {
            this.setState({
                satarray:result
            })
        }.bind(this));

        this.setState({
            boxOptions:boxOptions,
            sunarray:sunarray,
            monarray:monarray,
            tuearray:tuearray,
            wedarray :wedarray,
            thuarray:thuarray,
            friarray:friarray,
            satarray:satarray
        })

    }
    render() {
        var sunarray = this.state.sunarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周日"
                    />

            )
        });
        var monarray = this.state.monarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周一"
                    />
            )
        });
        var tuearray = this.state.tuearray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周二"
                    />
            )
        });
        var wedarray = this.state.wedarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周三"
                    />
            )
        });
        var thuarray = this.state.thuarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周四"
                    />
            )
        });
        var friarray = this.state.friarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周五"
                    />
            )
        });
        var satarray = this.state.satarray.map(function (options,iterator) {
            return (
                    <Shinbangumi
                        bangumiId = {options._id}
                        bangumiName={options.name}
                        info={""}
                        startDate={options.startDate}
                        playerStationInChina={""}
                        officialSite={options.credit}
                        cover = {options.cover}
                        weekDay = "周六"
                    />
            )
        });
        return (
            <div className="content">
                <div className="row Content">
                    {sunarray}
                </div>
                <div className="row Content">
                    {monarray}
                </div>
                <div className="row Content">
                    {tuearray}
                </div>
                <div className="row Content">
                    {wedarray}
                </div>
                <div className="row Content">
                    {thuarray}
                </div>
                <div className="row Content">
                    {friarray}
                </div>
                <div className="row Content">
                    {satarray}
                </div>
            </div>
        );
    }

}


export default Content;