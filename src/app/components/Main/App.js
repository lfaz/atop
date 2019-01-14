import React, { Component } from 'react';
import logo from '../../../logo.svg';
import './App.scss';
import SiteComponent from "../Sites/site.component";

class App extends Component {
  render() {
    return (
      <div className="AppComponent">
        <SiteComponent/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
