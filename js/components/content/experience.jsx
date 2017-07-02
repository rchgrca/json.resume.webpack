import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { preciseDiff } from '../../plugins/readable-range'

export default class Experience extends Component {
    render() {
        let { model } = this.props;
        return (
            <ul className="list-unstyled">{this.getWork(model)}</ul>
        )
    }

    getWork(model){
        return model.work.map((o,i) => {
            let endDate         = (o.endDate) ?  moment(o.endDate).format("MMM YYYY") : "Present",
                endDateDuration = (o.endDate) ? moment(o.endDate) : moment(),
                datesworked     = moment(o.startDate).format("MMM YYYY") + " - " + endDate,
                   duration     = moment.preciseDiff(moment(o.startDate), endDateDuration);

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
                        <ul>{this.getHighlights(o)}</ul>
                    </div>
                </li>
            )
        })
    }

    getHighlights(o){
        return o.highlights.map((o,i) => {
            return <li key={i} dangerouslySetInnerHTML={{__html: o}}></li>
        })
    }
}
