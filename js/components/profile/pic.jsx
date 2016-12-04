import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfilePic extends Component {
    render() {
        let model = this.props.model.basics;
        return (
            <div>
                <span className="profile-pic-container">
                    <div className="profile-pic">
                        <img className="media-object img-circle center-block"
                            data-src="holder.js/100x100"
                            alt={model.name}
                            src={model.picture}/>
                    </div>
                    <div className="name-and-profession">
                        <h3 className="text-center text-bolder name">{model.name}</h3>
                        <h5 className="text-muted text-center">{model.label}</h5>
                    </div>
                </span>
                <hr/>
            </div>
        )
    }
}
