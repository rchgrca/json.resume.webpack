import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'underscore';
import { Doughnut } from 'react-chartjs';

export default class Day extends Component {
    render() {
        var { day } = this.props.model;
        var chartOptions = {
            responsive: true
        }
        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            <p className="clear-margin relative">
                                <div>Activities in hours:</div>
                                <Doughnut data={day} options={chartOptions}/>
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
