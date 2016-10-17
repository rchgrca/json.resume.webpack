import React, { Component } from 'react';
import { render } from 'react-dom';
import Pic from './pic.jsx'
import Contact from './contact.jsx'
import SocialLinks from './socialLinks.jsx'

export default class ProfileCard extends Component {
    render() {
        return (
            <div className="card profile-card">
                <Pic model={this.props.model} />
                <Contact model={this.props.contact} />
                <SocialLinks model={this.props.model} />
            </div>
        )
    }
}
