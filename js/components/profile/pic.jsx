import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfilePic extends Component {
    render() {
        return (
            <div>
                <span className="profile-pic-container">
                    <div className="profile-pic">
                        <img className="media-object img-circle center-block"  data-src="holder.js/100x100"
                            alt={this.props.model.basics.name} src={this.props.model.basics.picture}/>
                    </div>
                    <div className="name-and-profession">
                        <h3 className="text-center text-bolder name">{this.props.model.basics.name}</h3>
                        <h5 className="text-muted text-center">{this.props.model.basics.label}</h5>
                    </div>
                </span>
                <hr/>
            </div>
        )
    }
}
