import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage/Landing'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={LandingPage}/>
      </BrowserRouter>
    );
  }
}

export default App;
