import React, { Component } from 'react';
import { render } from 'react-dom';
import Pic from './pic.jsx'
import Contact from './contact.jsx'
import SocialLinks from './socialLinks.jsx'

export default class ProfileCard extends Component {
    render() {
        let { model, handleClick, bgColor, borderCard } = this.props
        let contact = [
            {icon: "file-pdf-o", detail: "PDF", href: model.basics.pdf},
            //{icon: "phone", detail: "Phone", href: `tel: ${model.basics.phone}`},
            {icon: "envelope", detail: "E-mail", href: `mailto: ${model.basics.email}`},
            {icon: "github", detail: model.basics.github.value, href: model.basics.github.href}
        ];
        return (
            <div className={`card profile-card ${bgColor} ${borderCard}`}>
                <Pic model={model} handleClick={handleClick} borderCard={borderCard}/>
                <Contact model={contact} />
                <SocialLinks model={model} />
            </div>
        )
    }
}
