import React, { Component } from 'react';
import { render } from 'react-dom';
import section from './models/section'
import resume from './models/resume'
import contact from './models/contact'
import FloatingNav from './components/floatingNav.jsx'
import Card from './components/profile/card.jsx'
import Content from './components/content/content.jsx'

export default class App extends Component {
  render() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row main clearfix">
                    <a href="#" className="js-floating-nav-trigger floating-nav-trigger"><i className="fa fa-bars"></i><span className="close-icon">&times;</span></a>
                    <nav className="floating-nav js-floating-nav">
                        <FloatingNav model={section.model} />
                    </nav>
                    <section className="col-md-3 card-wrapper profile-card-wrapper affix">
                        <Card model={resume.model} contact={contact.model}/>
                    </section>
                    <section className="col-md-9 card-wrapper content-card-wrapper pull-right">
                        <Content model={resume.model} section={section.model} />
                    </section>
                </div>
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
