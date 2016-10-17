import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FloatingNav extends Component {
    render() {
        return (
            <div className="contact-details clearfix" id="contact">
                {this.props.model.map(function(o,i) {
                    var fonticon = "fa fa-lg fa-" + o.icon;
                    return (
                        <div className="detail" key={i}>
                            <span className="icon"><i className={fonticon}></i></span>
                            <span className="info">
                            {(() => {
                                if (o.href){
                                    return <a href={o.href} target="_blank">{o.detail}</a>
                                } else {
                                    return o.detail
                                }
                            })()}

                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
