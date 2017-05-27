import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ProfilePic extends Component {
    render() {
        let { handleClick, borderCard, model: { basics } } = this.props
        return (
            <div>
                <span className="profile-pic-container">
                    <div className="profile-pic">
                        <img className={`media-object img-circle center-block ${borderCard}`}
                            onClick={handleClick}
                            data-src="holder.js/100x100"
                            alt={basics.name}
                            src={basics.picture}/>
                    </div>
                    <div className="name-and-profession">
                        <h3 className="text-center text-bolder name">{basics.name}</h3>
                        <h5 className="text-muted text-center">{basics.label}</h5>
                    </div>
                </span>
                <hr/>
            </div>
        )
    }
}
