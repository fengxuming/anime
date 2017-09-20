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
            name_zh_cn:"",
        }
    }
    handleNameChange = (e)=>{
        const bangumi = this.state.bangumi;
        bangumi.name = e.target.value;
        this.setState({
            bangumi:bangumi
        })
    };
    handleCreditChange = (e)=>{
        const bangumi = this.state.bangumi;
        bangumi.credit = e.target.value;
        this.setState({
            bangumi:bangumi
        })
    };
    handleShowOnChange = (e)=>{
        const bangumi = this.state.bangumi;
        bangumi.showOn = e.target.value;
        this.setState({
            bangumi:bangumi
        })
    };
    submit = ()=>{
      console.log(this.state.bangumi);
    };
    uploadImg = ()=>{
      $.ajax({
          url:this.state.host+"upload",
          type:"POST",
          cache:false,
          data:new FormData($("#bangumiForm")[2]),
          processData:false,
          contentType:false
      },function (url) {
          const bangumi = this.state.bangumi;
          bangumi.cover = url;
          this.setState({
              bangumi:bangumi
          })
      }.bind(this));
        // const bangumi = this.state.bangumi;
        // bangumi.cover = "uploads/file-1505896498815.png";
        // this.setState({
        //     bangumi:bangumi
        // })
        // console.log("fff");
    };


    componentDidMount(){
        $.get(this.state.host+"bangumimoes/"+this.state.bangumiId,function (bangumi) {
            this.setState({
                bangumi:bangumi,
                name_zh_cn:bangumi.locale.zh_cn
            })
        }.bind(this));
    }
    render() {
        return(
            <div className="content">
                <div className="box box-info ">
                    <div className="box-body">
                        <form className="form-horizontal" id="bangumiForm">
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">名称</label>

                                <div className="col-sm-10">
                                    <input className="form-control" id="name" value={this.state.bangumi.name} onChange={this.handleNameChange} placeholder="名称" type="text"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">制作公司</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="credit" value={this.state.bangumi.credit} onChange={this.handleCreditChange} placeholder="制作公司" type="text"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label  className="col-sm-2 control-label">播放日期</label>
                                <div className="col-sm-10">
                                    <select id="showOn" value={this.state.bangumi.showOn} onChange={this.handleShowOnChange} className="form-control">
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

                            <div className="form-group">
                                <label  className="col-sm-2 control-label">中文名</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="name" value={this.state.name_zh_cn}  placeholder="中文名" type="text"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label  className="col-sm-2 control-label">封面</label>
                                <div className="col-sm-10">
                                    <img  src={this.state.bangumi.cover}/>
                                </div>
                                <input type="file" id="file" name="file"/>
                                <button type="button" className="btn btn-block btn-primary" onClick={this.uploadImg}>上传</button>
                            </div>

                            <button type="button" className="btn btn-block btn-primary" onClick={this.submit}>Primary</button>

                        </form>

                    </div>

                </div>
            </div>

        );

    }

}


export default Form;