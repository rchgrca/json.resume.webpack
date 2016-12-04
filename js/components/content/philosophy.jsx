import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Philosophy extends Component {
    render() {
        let { philosophy } = this.props.model,
        lastElement = philosophy.length - 1;
        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            {philosophy.map((i,k) => {
                                let isLastElement = (k == lastElement) ? true : false;
                                let spacer = isLastElement ? '' : <p></p>;
                                return (
                                    <p className="clear-margin relative" key={i}>
                                        <strong><i>”{i}”</i></strong>
                                        {spacer}
                                    </p>
                                )
                            })}
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
