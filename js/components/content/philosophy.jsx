import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Philosophy extends Component {
    render() {
        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            <p className="clear-margin relative">
                                <strong><i>”If your dreams don’t scare you, they are too small.”</i></strong>
                            </p>

                            <i></i>
                            <div className="space-top labels"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
