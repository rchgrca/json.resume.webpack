import React, { Component } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
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

  componentDidMount(){
      window.onload = function () {
        var toggleFloatingMenu = function() {
          $( '.js-floating-nav' ).toggleClass( 'is-visible' );
          $( '.js-floating-nav-trigger' ).toggleClass( 'is-open' );
        };

        $( ".background-card" ).css( "min-height", window.screen.availHeight + "px" );
        $( '.js-floating-nav-trigger' ).on( 'click', function(e) {
          e.preventDefault();
          toggleFloatingMenu();
        });
        $( '.js-floating-nav a' ).on( 'click', toggleFloatingMenu );
      }

  }
}

render(<App/>, document.getElementById('app'));
