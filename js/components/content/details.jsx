import React, { Component } from 'react';
import { render } from 'react-dom';
import About from './about.jsx'
import Experience from './experience.jsx'
import Skills from './skills.jsx'
import Education from './education.jsx'
import Interests from './interests.jsx'
import Philosophy from './philosophy.jsx'
import Day from './day.jsx'

export default class Details extends Component {
    render() {
        let section = this.props.model.basics.section;
        return (
            <div className="background-details">
                {section.map((block,i) => {
                    var fonticon = "fa fa-lg fa-" + block.font;
                    return (
                        <div className="detail" id={block.section} key={i}>
                            <div className="icon">
                                <i className={fonticon}></i>
                                <span className="mobile-title">{block.section}</span>
                            </div>
                            <div className="info">
                                <h4 className="title text-uppercase">{block.section}</h4>
                                {(() => {
                                    if (block.section === "about"){
                                        return (
                                            <About model={this.props.model} />
                                        )
                                    } else if (block.section === "work-experience") {
                                        return (
                                            <Experience model={this.props.model} />
                                        )
                                    } else if (block.section === "skills") {
                                        return (
                                            <Skills model={this.props.model} />
                                        )
                                    } else if (block.section === "education") {
                                        return (
                                            <Education model={this.props.model} />
                                        )
                                    } else if (block.section === "interests") {
                                        return (
                                            <Interests model={this.props.model} />
                                        )
                                    } else if (block.section === "philosophy") {
                                        return (
                                            <Philosophy model={this.props.model} />
                                        )
                                    } else if (block.section === "day") {
                                        return (
                                            <Day model={this.props.model} />
                                        )
                                    } else {
                                        // do nothing
                                    }
                                })()}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
