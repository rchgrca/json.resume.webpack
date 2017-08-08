import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

export default class Education extends Component {
    render() {
        var { education } = this.props.model;
        education = education[0];

        let startDate = moment(education.startDate).format("MMM YYYY"),
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
                            <div className="space-top labels"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
