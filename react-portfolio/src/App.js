import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Homepage from './pages/Homepage'
import About from './pages/About';

class App extends React.Component {
  render() {
    return (
      // <Homepage />
      <Router>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/about-me" component={ About } />
        </Switch>
      </Router>
    );
  }
}

export default App;
