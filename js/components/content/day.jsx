import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pie } from 'react-chartjs-2';

export default class Day extends Component {
    render() {
        var { day } = this.props.model
        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            <p className="clear-margin relative">
                                <div>Activities in hours:</div>
                                <Pie data={day} options={day.options}/>
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
