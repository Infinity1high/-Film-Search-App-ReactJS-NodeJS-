import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import './App.css';

import NavbarContainer from './containers/NavbarContainer';
import FilmListContainer from './containers/FilmListContainer';


class App extends Component {

  render() {
    return (
      <div className="App">
          <NavbarContainer/>
          <FilmListContainer/>
      </div>
    );
  }
}

export default App;
