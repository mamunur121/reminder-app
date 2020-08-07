import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import Players from './Players'
import Teams from './Teams'
import Output from "./Output";
import Providers from "./Providers";
import Services from "./Services";
import Providers1 from "./Providers1";
import Services1 from "./Services1";
import Calender from "./Calender";
import Welcome from "./Welcome";

class RouterMain extends Component {
  render() {
    const {match} = this.props;
    return (
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/players' exact component={Players} />
              <Route
                  exact
                  path={`/players/:topics`}
                  render={(props) => <Output {...props} />}
              />

              <Route
                  exact
                  path={`/players/:topics/providers`}
                  render={(props) => <Providers1 {...props} />}
              />

              <Route
                  exact
                  path={`/players/:topics/providers/:topicId`}
                  render={(props) => <Services1 {...props} />}
              />

              <Route
                  exact
                  path={`/players/:topics/providers/:topicId/:subId`}
                  render={(props) => <Calender {...props} />}
              />

              <Route
                  exact
                  path={`/players/:topics/providers/:topicId/:subId/calender`}
                  render={(props) => <Welcome {...props} />}
              />

              <Route path='/teams' component={Teams} />
              <Route render={()=> <h2 className='text-center'>Four.oh.Four.</h2>}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default RouterMain;