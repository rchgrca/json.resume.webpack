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
        let { model }   = this.props;
        let { section } = model.basics;
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

                                    switch(block.section){
                                        case "about":
                                            return <About model={model} />
                                            break;
                                        case "work-experience":
                                            return <Experience model={model} />
                                            break;
                                        case "skills":
                                            return <Skills model={model} />
                                            break;
                                        case "education":
                                            return <Education model={model} />
                                            break;
                                        case "books":
                                            return <Books model={model} />
                                            break;
                                        case "interests":
                                            return <Interests model={model} />
                                            break;
                                        case "philosophy":
                                            return <Philosophy model={model} />
                                            break;
                                        case "day":
                                            return <Day model={model} />
                                            break;
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
