import React, { Component } from 'react'
import { render } from 'react-dom'
import Details from './details.jsx'

export default class Content extends Component {
    render() {
        let { model, currently, bgColor, borderCard } = this.props,
        summary = currently.summary ? `${currently.summary}, ` : "",
        temperature = currently.temperature ? `${Math.round(currently.temperature)}F` : "",
        icon = currently.icon ? `wi wi-${model.basics.weather[currently.icon]}` : ""

        return (
            <div className={`card background-card ${bgColor} ${borderCard}`}>
                <h4 className="text-uppercase text-bolder">
                    <span>Background</span>
                    <span className="weather">
                        <span>{temperature}</span>
                        <i className={icon}></i>
                    </span>
                 </h4>
                <hr/>
                <Details model={model}/>
            </div>
        )
    }
}
