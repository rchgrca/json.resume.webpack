import React, { Component } from 'react';
import { render } from 'react-dom';
import About from './about.jsx'
import Experience from './experience.jsx'
import Skills from './skills.jsx'
import Education from './education.jsx'
import Interests from './interests.jsx'
import Books from './books.jsx'
import Philosophy from './philosophy.jsx'
import Day from './day.jsx'

export default class Details extends Component {
    render() {
        let { model }   = this.props
        let { section } = model.basics

        return (
            <div className="background-details">
                {this.getSection(section, model)}
            </div>
        )
    }

    getSection(section, model){
        return section.map((block,i) => {
            let fonticon = `fa fa-lg fa-${block.font}`
            return (
                <div className="detail" id={block.section} key={i}>
                    <div className="icon">
                        <i className={fonticon}></i>
                        <span className="mobile-title">{block.section}</span>
                    </div>
                    <div className="info">
                        <h4 className="title text-uppercase">{block.section}</h4>
                        {React.createElement(this.getElement(block.section),{model})}
                    </div>
                </div>
            )
        })
    }

    getElement(element){
        return {
            About,
            Experience,
            Skills,
            Education,
            Interests,
            Books,
            Philosophy,
            Day
        }[this.capitalize(element)]
    }

    capitalize(element){
        return element.charAt(0).toUpperCase() + element.slice(1);
    }
}
