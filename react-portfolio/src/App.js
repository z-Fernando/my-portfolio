import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Homepage from './pages/Homepage'
import About from './pages/About';
import Techs from './pages/Techs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/about-me" component={ About } />
          <Route path="/techs" component={ Techs } />
          <Route path="/contact" component={ Contact } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </Router>
    );
  }
}

export default App;
