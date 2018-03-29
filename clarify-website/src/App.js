import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import TheSolution from './components/TheSolution/TheSolution';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <TheSolution />
      </div>
    );
  }
}

export default App;
