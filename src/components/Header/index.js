import React, { Component } from 'react';
import { Route, Navigate, HashRouter } from 'react-router-dom';
// eslint-disable-next-line
import  Navigation  from '../../components/Navigation';
import  About  from '../../components/About';
import  Contact  from '../../components/Contact';
import  Portfolio  from '../../components/Portfolio';
import  Resume  from '../../components/Resume';

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" render={() => <Navigate to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </div>
      </HashRouter>
    );
  }
}

export default Header;
