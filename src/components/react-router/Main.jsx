import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home";
import Categories from "./Categories";
import Teams from "./Teams";
import Gas from "./Gas";
import GasExtension1 from "./GasExtension1";

class Main extends React.Component{
  render() {
    return(
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/topics' exact  component={Categories} />
              <Route path='/teams' component={Teams} />
              <Route
                  exact
                  path={`/topics/:topicId`}
                  render={(props) => <Gas {...props} />}
              />
              <Route
                  path={`/topics/:topicId/:subId`}
                  render={(props) => <GasExtension1 {...props} />}
              />
              <Route render={()=> <h1 className='text-center'>Four oh Four</h1>} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default Main;