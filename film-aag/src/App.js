import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
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
