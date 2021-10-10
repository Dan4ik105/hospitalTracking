import React, { Component } from "react";
import EmployeesPage from "./employeesPage/employess-page";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WorklofPage from "./worklogPage/worklog-page";

import NotFound from "./notFound/not-found";

class App extends Component {
  render() {
    return <Router>
      <Route
        path='/'
        exact
        render={()=><EmployeesPage/>}
      />
      <Route
        path='/employee/:id/worklog'
        render={
          ({match})=>{
            const {id} = match.params
            return <WorklofPage employeesId={id} />
          }}
      />
      <Route
        path=""
        component={<NotFound/>}
      />
    </Router>
}

}
export default App;
