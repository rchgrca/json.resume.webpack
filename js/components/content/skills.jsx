import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Skills extends Component {
    render() {
        let skills = this.props.model.skills
        return (
            <div className="content">
                <ul className="list-unstyled">{this.getSkills(skills)}</ul>
            </div>
        )
    }

    getSkills(skills){
        return skills.map(function(o,i){
            let tooltip = `Skills: ${o.name}`
            return (
                <li className="card card-nested card-skills" key={i}>
                    <div className="skill-level" rel="tooltip" title={tooltip} data-placement="right">
                        <div className="skill-progress master"></div>
                    </div>
                    <div className="skill-info">
                        <strong>{o.name}</strong>
                        <div className="space-top labels">
                            <span className="label label-keyword">{o.keywords[0]}</span>
                        </div>
                    </div>
                </li>
            )
        })
    }
}
