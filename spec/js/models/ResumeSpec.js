import moment from 'moment'
import resume from '../../../js/models/resume'

describe("The resume JSON data model", () => {

    let model = resume.model

    it("lists a person's basic information", () => {
        expect(model.basics.name).toEqual("Richard L. Garcia")
        expect(model.basics.label).toEqual("Frontend Software Developer")
        expect(model.basics.email).toEqual("rchgrca@gmail.com")
        expect(model.basics.phone).toEqual("5109183102")
    })

    it("lists a summary", () => {
        let summary = `Richard is a passionate engineer who loves solving problems at the macro and micro level. He is looking for a Front End development position that allows him to combine his love for optimizing the end user experience through visual layout and page performance. Richard has working experience with the following:`
        expect(model.basics.summary).toEqual(summary)
    })

    it("lists highlights", () => {
        let highlight = [
            `React, Redux, Webpack, Ruby on Rails, SASS, Jasmine, Karma, RSpec, MySQL, Backbone, Handlebars`,
            `ES6, Test Driven Development, Responsive Web Design, Mapbox, Highcharts, Auth0, Liquid, postMessage, Heroku, Git`
        ]

        model.basics.highlights.forEach((o,i) => {
            expect(o).toEqual(highlight[i])
        })
    })

    it("lists a map location", () => {
        expect(model.basics.location.map).toEqual("https://goo.gl/maps/vz51Y5HhXLN2")
    })

    it("lists a LinkedIn profile", () => {
        let aProfiles = [{
            "network": "LinkedIn",
            "username": "rchgrca",
            "url": "http://www.linkedin.com/in/rchgrca"
        }]

        model.basics.profiles.forEach((o,i) => {
            expect(o.network).toEqual(aProfiles[i].network)
            expect(o.username).toEqual(aProfiles[i].username)
            expect(o.url).toEqual(aProfiles[i].url)
        })
    })

    it("lists content sections with font-icon classnames", () => {
        let aSection = [
            {section: "about", font: "user"},
            {section: "experience", font: "building"},
            {section: "education", font: "mortar-board"},
            {section: "books", font: "book"},
            {section: "interests", font: "heart"},
            {section: "philosophy", font: "lightbulb-o"},
            {section: "day", font: "clock-o"}
        ],
        keySection = Object.keys(model.basics.section[0])

        expect(model.basics.section.length).toEqual(7)

        model.basics.section.forEach((o,i) => {
            expect(o.section).not.toEqual("skills")
            expect(o.section).toEqual(aSection[i].section)
            expect(o.font).toEqual(aSection[i].font)
        })
    })

    it("contains a dark sky font icon to font-awesome weather icon map", () => {
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
        aIcon = Object.keys(model.basics.weather)

        aIcon.forEach((key) => {
            expect(model.basics.weather[key]).toEqual(icon[key])
        })
    })

    it("lists work experiences", () => {
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
        aLastJob = Object.keys(model.work[0]),
        aHighlights = model.work[0].highlights

        expect(model.work.length).toBeGreaterThan(0)
        expect(model.work.length).toEqual(5)

        expect(moment(model.work[0].startDate).isValid()).toEqual(true)
        expect(moment(model.work[0].endDate).isValid()).toEqual(true)

        expect(moment(model.work[0].endDate).isAfter(moment(model.work[0].startDate))).toEqual(true)

        aLastJob.forEach((key) => {
            expect(model.work[0][key]).toEqual(lastJob[key])
        })

        aHighlights.forEach((key) => {
            expect(model.work[0].highlights[key]).toEqual(lastJob.highlights[key])
        })
    })

    it("lists education", () => {
        let education = {
            "institution": "Texas A&M University",
            "area": "Electronics Engineering Technology, Data Communications Emphasis",
            "studyType": "Bachelor",
            "startDate": "1984-08-15",
            "endDate": "1990-05-15",
            "gpa": "0.0",
            "courses": []
        },
        aEducation = Object.keys(model.education[0])

        expect(model.education.length).toBeGreaterThan(0)
        expect(model.education.length).toEqual(1)

        expect(moment(model.education[0].startDate).isValid()).toEqual(true)
        expect(moment(model.education[0].endDate).isValid()).toEqual(true)

        expect(moment(model.education[0].endDate).isAfter(moment(model.education[0].startDate))).toEqual(true)

        aEducation.forEach((key) => {
            expect(model.education[0][key]).toEqual(education[key])
        })

    })

    it("lists relevant books read", () => {
        let books = [
            {
              "name": "The Effective Engineer",
              "keywords": [],
              "href":"http://www.theeffectiveengineer.com/"
            },
            {
              "name": "The Pragmatic Programmer",
              "keywords": [],
              "href":"https://pragprog.com/book/tpp/the-pragmatic-programmer"
            }
        ]

        expect(model.books.length).toEqual(2)

        model.books.forEach((o, i) => {
            expect(o.name).toEqual(books[i].name)
            expect(o.href).toEqual(books[i].href)
        })
    })

    it("lists languages known", () => {
        let languages = [
          {
            "language": "Spanish",
            "fluency": "(speak, read, write)"
          }
        ]

        expect(model.languages.length).toEqual(1)

        model.languages.forEach((o) => {
            expect(o.language).toEqual(languages[0].language)
            expect(o.fluency).toEqual(languages[0].fluency)
        })
    })

    it("lists interests", () => {
        let interests = [
          {
            "name": "Cycling",
            "keywords": [],
            "href":"http://svlatino.com/rich-garcia-applies-entrepreneur-skills-for-a-worthy-cause/"
          },
          {
            "name": "Near-Space Exploration",
            "keywords": [],
            "href":"https://www.youtube.com/watch?v=QldWTVju_uk"
          }
        ]

        expect(model.interests.length).toEqual(2)

        model.interests.forEach((o,i) => {
            expect(o.name).toEqual(interests[i].name)
            expect(o.href).toEqual(interests[i].href)
        })
    })

    it("lists philosophies", () => {
        let philosophy = [
          "If your dreams don’t scare you, they are too small."
        ]

        expect(model.philosophy.length).toEqual(1)

        model.philosophy.forEach((o,i) => {
            expect(o).toEqual(philosophy[i])
        })
    })

    it("lists how I spend my day in hours", () => {
        let day = {
            labels: ["Sleep", "Code", "Family", "Self", "Commute", "Meetings", "Organize", "Meditate"],
            datasets: [{
                data: [7, 6, 3, 3, 2, 1.5, 1, .5],
                backgroundColor: ["#0544d3", "#6b0392", "#59922b", "#d70206", "maroon", "#f05b4f", "#f4c63d", "#d17905"],
                hoverBackgroundColor: ["#0544d3", "#6b0392", "#59922b", "#d70206", "maroon", "#f05b4f", "#f4c63d", "#d17905"],
                borderWidth: [0,0,0,0,0,0,0,0]
            }],
            options: {
                responsive: true,
                cutoutPercentage: 0,
                animation: {
                    animateScale: true
                }
            }
        },
        aLabels = model.day.labels,
        aHours = model.day.datasets[0].data,
        aBgColor = model.day.datasets[0].backgroundColor

        aLabels.forEach((o,i) => {
            expect(o).toEqual(day.labels[i])
            expect(aHours[i]).toEqual(day.datasets[0].data[i])
            expect(aBgColor[i]).toEqual(day.datasets[0].backgroundColor[i])
        })


    })

});
