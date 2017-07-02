import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Interests extends Component {
    render() {
        let { books } = this.props.model;
        return (
            <div className="content">
                <ul className="list-unstyled">
                    {this.getBooks(books)}
                </ul>
            </div>
        )
    }

    getBooks(books){
        return books.map((o,i) => {
            return (
                <li className="card card-nested" key={i}>
                    <p><strong><a href={o.href} target="_blank">{o.name}</a></strong></p>
                    <div className="space-top labels"></div>
                </li>
            )
        })
    }
}
