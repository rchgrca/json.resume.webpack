import React, { Component } from 'react';
import { render } from 'react-dom';
import resume from './models/resume'
import FloatingNav from './components/floatingNav.jsx'
import Card from './components/profile/card.jsx'
import Content from './components/content/content.jsx'

export default class App extends Component {
  render() {
    let model = resume.model;
    return (
        <div>
            <div className="container-fluid">
                <div className="row main clearfix">
                    <a href="#" className="js-floating-nav-trigger floating-nav-trigger"><i className="fa fa-bars"></i><span className="close-icon">&times;</span></a>
                    <nav className="floating-nav js-floating-nav">
                        <FloatingNav model={model.basics.section} />
                    </nav>
                    <section className="col-md-3 card-wrapper profile-card-wrapper affix">
                        <Card model={model}/>
                    </section>
                    <section className="col-md-9 card-wrapper content-card-wrapper pull-right">
                        <Content model={model} section={model.basics.section} />
                    </section>
                </div>
            </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
