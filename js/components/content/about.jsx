import React, { Component } from 'react';
import { render } from 'react-dom';

export default class About extends Component {
    render() {
        return (
            <div className="content">
                {this.props.model.basics.summary}
                <ul className="highlights">
                    {this.props.model.basics.highlights.map(function(o,i){
                        return (
                            <li key={i}>{o}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
