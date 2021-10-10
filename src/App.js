import React, { Component } from "react";
import EmployeesPage from "./employeesPage/employess-page";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WorklofPage from "./worklogPage/worklog-page";

import NotFound from "./notFound/not-found";

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route
          path='/'
          exact
          render={()=><EmployeesPage/>}
        />
        <Route
          path='/employee/:id/worklog'
          exact
          render={
            ({match})=>{
              const {id} = match.params
              return <WorklofPage employeesId={id} />
            }}
        />
        <Route
          component={NotFound}
        />
        
      </Switch>
    </Router>
}

}
export default App;
