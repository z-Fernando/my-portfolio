import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Homepage from './pages/Homepage'
import About from './pages/About';
import Techs from './pages/Techs';

class App extends React.Component {
  render() {
    return (
      // <Homepage />
      <Router>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/about-me" component={ About } />
          <Route path="/techs" component={ Techs } />
        </Switch>
      </Router>
    );
  }
}

export default App;
