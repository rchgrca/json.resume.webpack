import React, { Component } from 'react';
import { render } from 'react-dom';
import Pic from './pic.jsx'
import Contact from './contact.jsx'
import SocialLinks from './socialLinks.jsx'

export default class ProfileCard extends Component {
    render() {
        let { model } = this.props;
        let contact = [
            {icon: "location-arrow", detail: "Home", href:model.basics.location.map},
            {icon: "phone", detail: "Phone", href:"tel:" + model.basics.phone},
            {icon: "envelope", detail: "E-mail", href:"mailto:" + model.basics.email},
            {icon: "link", detail: model.basics.website.value, href:model.basics.website.href}
        ];
        return (
            <div className="card profile-card">
                <Pic model={model} />
                <Contact model={contact} />
                <SocialLinks model={model} />
            </div>
        )
    }
}
