import React, { Component } from 'react';
import { render } from 'react-dom';
import Details from './details.jsx'

export default class Content extends Component {
    render() {
        let { model } = this.props;
        return (
            <div className="card background-card">
                <h4 className="text-uppercase text-bolder">Background</h4>
                <hr/>
                <Details model={model}/>
            </div>
        )
    }
}
