import $ from 'jquery';

export default $.extend(true, {}, {}, {
    model: {
      "basics": {
        "name": "Richard L. Garcia",
        "label": "Frontend Software Developer",
        "picture": "http://n.leesonbooks.com/rg/img/rich.beanie.copy.jpg",
        "email": "rchgrca@gmail.com",
        "phone": "5109183102",
        "website": {"value":"Portfolio","href":"http://rchgrca.io"},
        "summary": "Richard is a passionate engineer who loves solving problems at the macro and micro level. He is looking for a Front End development position that allows him to combine his love for optimizing the end user experience through visual layout and page performance. Richard has working experience with the following:",
        "highlights": [
          "React/Backbone/Redux/Webpack, Ruby on Rails, SCSS, Karma/Jasmine/RSPEC, MySQL",
          "Real-time web and mobile-web applications"
        ],
        "location": {
          "address": "38648 Dow Ct.",
          "postalCode": "CA 94536",
          "city": "Fremont",
          "countryCode": "US",
          "region": "CA",
          "map":"https://goo.gl/maps/vz51Y5HhXLN2"
        },
        "profiles": [
          {
            "network": "LinkedIn",
            "username": "rchgrca",
            "url": "http://www.linkedin.com/in/rchgrca"
          }
        ],

        "section": [
            {section: "about", font: "user"},
            {section: "work-experience", font: "building"},
            //{section: "skills", font: "code"},
            {section: "education", font: "mortar-board"},
            {section: "books", font: "book"},
            {section: "interests", font: "heart"},
            {section: "philosophy", font: "lightbulb-o"},
            {section: "day", font: "clock-o"}
        ]
      },
      "work": [
        {
          "company": "Euclid Analytics",
          "position": "Sr. Frontend Engineer",
          "website": "http://euclidanalytics.com",
          "startDate": "2015-08-15",
          "endDate": "2017-04-18",
          "summary": "Data Visualization",
          "highlights": [
            "Created/maintained a web/mobile application for the largest sensor network in the world",
            "Stack compromised of React/Backbone/Redux/Webpack/SCSS, Ruby On Rails, and MySQL",
            "Test driven development with Karma/Jasmine/RSPEC in lieu of QA team",
            "Recipient of \"Euclid Above and Beyond Award\""
          ]
        },
        {
          "company": "Webmocha/Intuit",
          "position": "Contract Developer",
          "website": "http://quickbooks.intuit.com.au",
          "startDate": "2012-02-01",
          "endDate": "2015-07-15",
          "summary": "Adobe CQ5 Component Development for Intuit",
          "highlights": [
            "Lead Developer for “on-boarding” of JSP pages to CQ5/Ruby on Rails environment for Pro Tax Group",
            "Created numerous CQ5 “responsive” components used by marketing to build customizable web pages",
            "Improved page performance from 12 secs to 3 secs"
          ]
        },
        {
          "company": "Blyve, Inc",
          "position": "Co-founder, Developer",
          "website": "http://blyve.com",
          "startDate": "2008-01-01",
          "endDate": "2010-08-01",
          "summary": "Development of client-side code, fundraising, business development",
          "highlights": [
            "Single-handedly conceived, designed, architected, & developed full stack of a polling based, real-time web and mobile-web based application from conception to release",
            "Recognized that Node.js was a better solution for our real-time application, authorized/supervised team to convert our product including Backbone.js, Handlebars.js, and LESS",
            "Featured in video blog by <a href=\"http://www.youtube.com/watch?v=UmCA69ciyzo\">Robert Scoble</a>",
            "Featured startup by Manos Accelerator, first cohort",
            "Single-handedly recruited and hired small team of developers & product managers to create application"
          ]
        },
        {
          "company": "AOL, Inc.",
          "position": "Sr. Software Developer",
          "website": "",
          "startDate": "2010-08-01",
          "endDate": "2011-03-30",
          "summary": "Ideate, Innovate, Implement",
          "highlights": [
            "Architect/developer of NodeJs app that calculated employee bit.ly links to drive more traffic to AOL sites",
            "Collaborated with Mapquest to create innovative Traffic Notification Services system that alerts the best time to leave",
            "Created 'Mapquest Sports'. Web & mobile Innovations that deliver relevant geo-located sports updates",
            "Created “Mapquest Headlines” for Patch.com that allowed delivery of geo-located news headlines"
          ]
        },
        {
          "company": "Yahoo!, Inc.",
          "position": "Sr. Software Developer",
          "website": "http://quickbooks.intuit.com.au",
          "startDate": "2004-03-01",
          "endDate": "2007-11-30",
          "summary": "Development of dynamic client-side code for the presentation layer",
          "highlights": [
            "Lead Frontend Engineer Yahoo! Frontpage (delivered Exceptional News & Top Searches modules)",
            "Lead Frontend Engineer for MyYahoo and Cobrand Portals (delivered Zorro, first My Yahoo! Frontend Engineer)",
            "Lead Frontend Engineer and Archictect for AT&T WRA/MRA web and mobile-based applications (AT&T Homezone, AT&T U-verse TV, completed mobile application in two weeks, 1 month ahead of schedule)",
            "Lead Frontend Engineer Yahoo! Teachers",
            "Lecturer at Yahoo Frontend Engineer Summit ('Developing for the Three Screen Experience')",
            "Recipient of ‘You Rock’ Award and mentored seven junior level engineers",
            "Tutored English to Spanish-speaking Yahoo! custodians, Captain Yahoo! Soccer Team"
          ]
        }
        /*,
        {
          "company": "eBay, Inc.",
          "position": "Contract Developer",
          "website": "http://ebay.com",
          "startDate": "2003-08-01",
          "endDate": "2003-12-15",
          "summary": "Development of HTML embedded XSL stylesheets",
          "highlights": [
            "Several features including 'Item Subtitle', 'Help Phase 5' (Lead Developer)"
          ]
        },
        {
          "company": "Thirdspace Interactive TV",
          "position": "Developer",
          "website": "http://www.prnewswire.com/news-releases/sgi-and-thirdspace-form-interactive-tv-alliance-75554182.html",
          "startDate": "2002-02-01",
          "endDate": "2003-05-01",
          "summary": "Development of DHTML embedded XSL stylesheets and server-side applications",
          "highlights": [
            "Lead developer for the Thomson set top box product. Brought in $500K in revenue"
          ]
        },
        {
          "company": "Powermarket, Inc.",
          "position": "Contract Developer",
          "website": "http://www.cnet.com/news/powermarket-gets-12-5-million/",
          "startDate": "2001-09-01",
          "endDate": "2002-01-30",
          "summary": "Development of interactive DHTML mockups and application simulation",
          "highlights": [
            "Created an ASP/database driven company website (VBScript, MS-Access, ODBC, DAC, ADO)",
            "Delivered a XML/XSLT based sales tool that enabled Sales & Marketing to easily demo application"
          ]
        },
        {
          "company": "AmericanExpress.com",
          "position": "Contract Developer",
          "website": "http://www.prnewswire.com/news-releases/american-express-and-zowi-corporation-form-strategic-partnership-and-launch-stored-value-card-for-young-adults-and-teenagers-74886442.html",
          "startDate": "2000-08-01",
          "endDate": "2001-08-01",
          "summary": "UI development using JSP",
          "highlights": [
            "Lead UI developer",
            "3 month contract, extended 4 times (1 year)"
          ]
        },
        {
          "company": "Why Not Creations",
          "position": "Senior Webmaster",
          "website": "http://www.prnewswire.com/news-releases/go-network-and-whynot-creations-let-users-reach-out-with-1000-electronic-greeting-cards-73801862.html",
          "startDate": "1999-08-01",
          "endDate": "2000-08-01",
          "summary": "Development and Maintenance of International websites (10 total)",
          "highlights": [
            "Lead developer for European sites (Spanish, French, German)"
          ]
        },
        {
          "company": "Red Virtual Creative",
          "position": "Web Developer",
          "website": false,
          "startDate": "1996-09-01",
          "endDate": "2002-10-01",
          "summary": "Development of ‘turnkey’ web solutions for small businesses",
          "highlights": [
            "Created website client that brought in over $75K featured on the KRON nightly news",
            "Developed a customer support site for the Voysys Corporation reducing technical support calls by 20%"
          ]
        }
        */
      ],
      "education": [
        {
          "institution": "Texas A&M University",
          "area": "Electronics Engineering Technology, Data Communications Emphasis",
          "studyType": "Bachelor",
          "startDate": "1984-08-15",
          "endDate": "1990-05-15",
          "gpa": "0.0",
          "courses": []
        }
      ],
      "books": [
          {
            "name": "The Effective Engineer",
            "keywords": [],
            "href":"http://effectiveengineer.com"
          },
          {
            "name": "The Pragmatic Programmer",
            "keywords": [],
            "href":"https://pragmaticprogrammer"
          }
      ],
      "languages": [
        {
          "language": "Spanish",
          "fluency": "(speak, read, write)"
        }
      ],
      "interests": [
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
      ],
      "philosophy": [
        "If your dreams don’t scare you, they are too small."
      ],
      "day": [
        {
            "color": "#0033CC",
            "highlight": "#CCCCCC",
            "label": "Commute",
            "value": 2
        },
        {
            "color": "#0099FF",
            "highlight": "#CCCCCC",
            "label": "Sleep",
            "value": 7
        },
        {
            "color": "#0000CC",
            "highlight": "#CCCCCC",
            "label": "Organize",
            "value": 1
        },
        {
            "color": "#0000FF",
            "highlight": "#CCCCCC",
            "label": "Meditate",
            "value": 0.5
        },
        {
            "color": "#003399",
            "highlight": "#CCCCCC",
            "label": "Meetings",
            "value": 1.5
        },
        {
            "color": "#0033CC",
            "highlight": "#CCCCCC",
            "label": "Code",
            "value": 6
        },
        {
            "color": "#0033FF",
            "highlight": "#CCCCCC",
            "label": "Family",
            "value": 3
        },
        {
            "color": "#003399",
            "highlight": "#CCCCCC",
            "label": "Self",
            "value": 3
        }
      ]
    }
});
