/**
 * Created by fengxuming on 2017/8/31.
 */
import React, { Component } from 'react';
import './DataShow.css';
import {
    Link
} from 'react-router-dom';

class DataShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){


    }
    render() {
        // let infos = this.props.info.map((options,iterator)=>{
        //     return <p>{options}</p>
        // });
        return (
            <div className="col-md-8">
                <div className="nav-tabs-custom">
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#activity" data-toggle="tab">简介</a></li>
                        <li><a href="#timeline" data-toggle="tab">Timeline</a></li>
                        <li><a href="#settings" data-toggle="tab">Settings</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="active tab-pane" id="activity">
                            {/*<span className="info">{infos}</span>*/}
                        </div>

                        <div className="tab-pane" id="timeline">

                            <ul className="timeline timeline-inverse">

                                <li className="time-label">
                        <span className="bg-red">
                          10 Feb. 2014
                        </span>
                                </li>

                                <li>
                                    <i className="fa fa-envelope bg-blue"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>

                                        <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                                        <div className="timeline-body">
                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                                            quora plaxo ideeli hulu weebly balihoo...
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-primary btn-xs">Read more</a>
                                            <a className="btn btn-danger btn-xs">Delete</a>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <i className="fa fa-user bg-aqua"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>

                                        <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                                        </h3>
                                    </div>
                                </li>

                                <li>
                                    <i className="fa fa-comments bg-yellow"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>

                                        <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                                        <div className="timeline-body">
                                            Take me to your leader!
                                            Switzerland is small and neutral!
                                            We are more like Germany, ambitious and misunderstood!
                                        </div>
                                        <div className="timeline-footer">
                                            <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="time-label">
                        <span className="bg-green">
                          3 Jan. 2014
                        </span>
                                </li>

                                <li>
                                    <i className="fa fa-camera bg-purple"></i>

                                    <div className="timeline-item">
                                        <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>

                                        <h3 className="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                                        <div className="timeline-body">
                                            <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                    <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                                        <img src="http://placehold.it/150x100" alt="..." className="margin"/>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <i className="fa fa-clock-o bg-gray"></i>
                                </li>
                            </ul>
                        </div>


                        <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label for="inputName" className="col-sm-2 control-label">Name</label>

                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail" className="col-sm-2 control-label">Email</label>

                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputName" className="col-sm-2 control-label">Name</label>

                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputName" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputExperience" className="col-sm-2 control-label">Experience</label>

                                    <div className="col-sm-10">
                                        <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputSkills" className="col-sm-2 control-label">Skills</label>

                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <button type="submit" className="btn btn-danger">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Link to={"/from/"+this.props.bangumi._id}><button type="button" className="btn btn-block btn-primary">Primary</button></Link>
            </div>
        );

    }

}


export default DataShow;