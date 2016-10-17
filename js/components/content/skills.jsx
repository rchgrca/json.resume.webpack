import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Skills extends Component {
    render() {
        return (
            <div className="content">
                <ul className="list-unstyled">
                    {this.props.model.skills.map(function(o,i){
                        var tooltip = "Skills: " + o.name;
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
                    })}
                </ul>
            </div>
        )
    }
}
