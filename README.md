# json.resume.webpack
My resume built with Webpack/ReactJS and a single JSON structure http://rchgrca.io/resume/
Redux is cool but overkill for this project

* Single Page Application
  * Responsive web design
  * original markup based on "jsonresume.org"
  * Single JSON structure
    * thought of use Redux, best for dynamically changing data, not the case here
  * ChartJS API for React
  * simply add new object to array for new "section/experience/job"
  * I reduced amount of data for readability (older jobs)
  * PROBLEM:  wanted to add HTML in data
    * must use attribute:  "dangerouslySetInnerHTML" (XSS - cross site scripting) - React virtual DOM innerHTML
    * use DomPurify (XSS sanitizer plugin)
* Amount of time spent at job in months (experience.jsx)
  * Moment library plugin:  readable-range
  * moment.preciseDiff(startDate, endDate)
* Performance
  * 2.5s page load
    * CSS on CDN
    * font-awesome icons
    * custom CSS small: 3KB
      * (1) 25KB image
    * bottleneck:  bundle.js
      * 192KB gzip compressed
      * future: create two bundles
        * libraries
        * transpiled ReactJS code
        * gain 1 sec at most, worth it?
* DarkSky Weather API (index.jsx, content.jsx)
  * uses Axios promise library
    * XSS issue resolved by using CORS Proxy
      * http://crossorigin.me
        * maps to font-awesome icons
        * hooks for updating style on weather changes
          * handleClickImage (index.jsx)
          * uses React state
* Refactoring (details.jsx)
  * "switch" => "React.createElement()"
    * 28 lines of code to 1
  * "getElement"
    * acts like switch statement using ES6 object shorthand
* Tests
  * test the data model
