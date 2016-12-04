import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfileSocialLinks extends Component {
    render() {
        let model = this.props.model.basics;
        return (
            <div>
                <hr/>
                <div className="social-links text-center">
                    <a className="fa fa-linkedin fa-2x social-link link-linkedin"
                        href={model.profiles[0].url}
                        target="_blank"></a>
                </div>
            </div>
        )
    }
}
