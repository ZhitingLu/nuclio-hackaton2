import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/index';
import Data from './pages/data/index';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
         
          <Route exact path='/data'>
            <Data />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
