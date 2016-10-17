import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfileSocialLinks extends Component {
    render() {
        return (
            <div>
                <hr/>
                <div className="social-links text-center">
                    <a className="fa fa-linkedin fa-2x social-link link-linkedin"
                        href={this.props.model.basics.profiles[0].url} target="_blank"></a>
                </div>
            </div>
        )
    }
}
