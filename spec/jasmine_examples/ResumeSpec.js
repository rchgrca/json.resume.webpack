import moment from 'moment'
import resume from '../../js/models/resume'

describe("The resume JSON data model", () => {

    let model = resume.model

    it("has the basic information describing the person", () => {
        expect(model.basics.name).toEqual("Richard L. Garcia")
        expect(model.basics.label).toEqual("Frontend Software Developer")
        expect(model.basics.email).toEqual("rchgrca@gmail.com")
        expect(model.basics.phone).toEqual("5109183102")
    })

    it("has a summary", () => {
        let summary = `Richard is a passionate engineer who loves solving problems at the macro and micro level. He is looking for a Front End development position that allows him to combine his love for optimizing the end user experience through visual layout and page performance. Richard has working experience with the following:`
        expect(model.basics.summary).toEqual(summary)
    })

    it("has highlights", () => {
        let highlight = [
            `React, Redux, Webpack, Ruby on Rails, SASS, Jasmine, Karma, RSpec, MySQL, Backbone, Handlebars`,
            `ES6, Test Driven Development, Responsive Web Design, Mapbox, Highcharts, Auth0, Liquid, postMessage, Heroku, Git`
        ]
        for (var i=0;i<model.basics.highlights.length < 0; i++){
            expect(model.basics.highlights[i]).toEqual(highlight[i])
        }
    })

    it("has a map location", () => {
        expect(model.basics.location.map).toEqual("https://goo.gl/maps/vz51Y5HhXLN2")
    })

    it("has a LinkedIn profile", () => {
        let aProfiles = [{
            "network": "LinkedIn",
            "username": "rchgrca",
            "url": "http://www.linkedin.com/in/rchgrca"
        }]
        for (var i=0;i<model.basics.profiles.length < 0; i++){
            expect(model.basics.profiles[i].network).toEqual(aProfiles[i].network)
            expect(model.basics.profiles[i].username).toEqual(aProfiles[i].username)
            expect(model.basics.profiles[i].url).toEqual(aProfiles[i].url)
        }
    })

    it("has a list of sections with font-icon classnames", () => {
        var aSection = [
            {section: "about", font: "user"},
            {section: "experience", font: "building"},
            {section: "education", font: "mortar-board"},
            {section: "books", font: "book"},
            {section: "interests", font: "heart"},
            {section: "philosophy", font: "lightbulb-o"},
            {section: "day", font: "clock-o"}
        ]

        expect(model.basics.section.length).toEqual(7)

        for (var i=0;i<model.basics.section.length < 0; i++){
            expect(model.basics.section[i].section).not.toEqual("skills")
            expect(model.basics.section[i].section).toEqual(aSection[i].section)
            expect(model.basics.section[i].font).toEqual(aSection[i].font)
        }

    })

    it("has a map to font-awesome weather icons", () => {
        let icon = {
            "clear-day": "day-sunny",
            "clear-night": "night-clear",
            "rain": "rain",
            "snow": "snow",
            "sleet": "sleet",
            "wind": "strong-wind",
            "fog": "fog",
            "cloudy": "cloudy",
            "partly-cloudy-day": "day-cloudy",
            "partly-cloudy-night": "night-cloudy",
            "hail": "hail",
            "thunderstorm": "thunderstorm",
            "tornado": "tornado"
        },
        aIcon = Object.keys(icon)

        aIcon.forEach((key) => {
            expect(model.basics.weather[key]).toEqual(icon[key])
        })

    })

    it("has several work experiences", () => {
        let lastJob = {
            "company": "Euclid Analytics",
            "position": "Sr. Frontend Engineer",
            "website": "http://euclidanalytics.com",
            "startDate": "2015-08-15",
            "endDate": "2017-04-18",
            "summary": "Data Visualization describing physical store customer identity and behavior",
            "highlights": [
                "Created/maintained a single page application and transitioned it successfully from Backbone to React",
                "Created several custom WiFi portals capturing 10M identifiable customers from their visits",
                "Improved page performance from 9 seconds to 2 seconds",
                "Envisioned and created several features not solicited by product management:  Mapbox tooltip showing store distance",
                "Documented all engineering processes:  on-boarding, best practices, architecture",
                "Led several engineering book clubs for training and knowledge sharing",
                "Recipient of \"Euclid Above and Beyond Award\""
            ]
        },
        aLastJob = Object.keys(lastJob),
        aHighlights = lastJob.highlights

        expect(model.work.length).toEqual(5)
        expect(moment(model.work[0].startDate).isValid()).toEqual(true)
        expect(moment(model.work[0].endDate).isValid()).toEqual(true)

        aLastJob.forEach((key) => {
            expect(model.work[0][key]).toEqual(lastJob[key])
        })

        aHighlights.forEach((key) => {
            expect(model.work[0].highlights[key]).toEqual(lastJob.highlights[key])
        })


    })

});
