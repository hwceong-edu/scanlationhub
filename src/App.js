import { Component } from 'react';
import './App.css';
import Groups from './Groups.js';
import Latest from './Latest.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
      return (
        <Router>
          <div>
            <nav className="topbar">
              <ul>
                <li>
                  <Link to="/">ScanlationHub</Link>
                </li>
                <li>
                  <Link to="/latest">Latest</Link>
                </li>
                <li>
                  <Link to="/groups">Groups</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/latest">
                <Latest />
              </Route>
              <Route path="/groups">
                <Groups />
              </Route>
              <Route path="/">
                <Groups />
              </Route>
            </Switch>
          </div>
      </Router>
    );
  }

}

export default App;
