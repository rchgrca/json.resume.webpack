import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Experience extends Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.model.work.map(function(o,i){
                    var datesworked   = moment(o.startDate).format("MMM YYYY") + " - " + moment(o.endDate).format("MMM YYYY"),
                           duration   = o.duration,
                    durationformatted = duration[0] + ", " + duration[1];

                    return (
                        <li className="card card-nested clearfix" key={i}>
                            <div className="content">
                                <p className="clear-margin relative">
                                    <strong>{o.position}</strong>,&nbsp;
                                    <a href={o.website} target="_blank">{o.company}</a>
                                </p>
                                <p className="text-muted">
                                    <small>
                                        <span className="space-right">{datesworked}</span>
                                        <span><i className="fa fa-clock-o icon-left"></i><span className="duration">{duration}</span></span>
                                    </small>
                                </p>
                                <p>{o.summary}</p>
                                <ul>
                                    {o.highlights.map(function(o,i){
                                        return (
                                            <li key={i}>{o}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
