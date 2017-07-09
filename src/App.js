import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import '../public/css/font-awesome.min.css';
import { Catalogue } from './components/catalogue.js';
import { CatPage } from './components/cat-page.js';
import { Contact } from './components/contact.js';
import { Careers } from './components/careers.js';
import '../public/css/App.css';

const CatPageWrap = ({ match }) => (
  <CatPage cat={match.params.cat}/>
  );

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container">
            <h2>
            <Link to={`/`}><img src={logo} className="App-logo" alt="logo" />Catopedia</Link></h2>
            <span className="hidden-sm-down">Buy cats for cats</span>
            <img src='/images/menu.png' alt='' className="float-right menu"/>
            </div>
          </header>
            <div>
            <Route exact path="/" component={Catalogue} />
            <Route path="/cat/:cat" component={CatPageWrap} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/careers" component={Careers} />
            </div>
          <footer>
              <div className="container container-footer">
                <div className="row col-lg-3 col-md-4">
                  <div className="col-md-6 text-center">
                   <Link to={`/contact`}>Contact Us</Link>
                  </div>
                  <div className="col-md-6 text-center">
                   <Link to={`/careers`}>Careers</Link>
                  </div>
                </div>
              </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
