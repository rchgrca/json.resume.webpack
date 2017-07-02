import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FloatingNav extends Component {
    render() {
        let { model } = this.props;
        return (
            <div className="contact-details clearfix" id="contact">
                {this.getDetails(model)}
            </div>
        )
    }

    getDetails(model){
        return model.map((o,i) => {
            var fonticon = `fa fa-lg fa-${o.icon}`
            return (
                <div className="detail" key={i}>
                    <span className="icon"><i className={fonticon}></i></span>
                    <span className="info">{this.getDetail(o)}</span>
                </div>
            )
       })
    }

    getDetail(o){
        return o.href ? <a href={o.href} target="_blank">{o.detail}</a> : o.detail
    }
}
