import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Education extends Component {
    render() {
        let education = this.props.model.education[0],
        startDate = moment(education.startDate).format("MMM YYYY"),
        endDate = moment(education.endDate).format("MMM YYYY"),
        attended = startDate + " - " + endDate;

        return (
            <div className="content">
                <ul className="list-unstyled">
                    <li className="card card-nested">
                        <div className="content">
                            <p className="clear-margin relative">
                                <strong>{education.area}, {education.studyType}</strong>, {education.institution}
                            </p>
                            <p className="text-muted">
                                <small>{attended}</small>
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
