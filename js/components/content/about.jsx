import React, { Component } from 'react';
import { render } from 'react-dom';

export default class About extends Component {
    render() {
        let model = this.props.model.basics;
        return (
            <div className="content">
                {model.summary}
                <ul className="highlights">
                    {this.getListItems(model)}
                </ul>
            </div>
        )
    }

    getListItems(model){
        return model.highlights.map((o,i) => {
            return (
                <li key={i}>{o}</li>
            )
        })
    }
}
