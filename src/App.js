import React, { Component } from 'react';
import './App.css';

import NavbarContainer from './containers/NavbarContainer';
import FilmListContainer from './containers/FilmListContainer';


class App extends Component {

componentWillMount() {
    this.props.loadFilmsAction();
    console.log(this.props);
}

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
