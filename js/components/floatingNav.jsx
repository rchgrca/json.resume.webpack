import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FloatingNav extends Component {
    render() {
        let { bgColor, borderCard } = this.props
        return (
            <ul className={`list-unstyled ${bgColor} ${borderCard}`}>
                {this.props.model.map(function(o,i) {
                    var section = "#" + o.section,
                      fonticon = "fa fa-" + o.font;
                    return (
                        <li key={i}>
                            <a href={section}><i className={fonticon}></i>{o.section}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
