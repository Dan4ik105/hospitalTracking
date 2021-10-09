import React, {Component} from "react";
import { getWorklog } from "../api";
import CircularProgress from '@mui/material/CircularProgress';
import WorklogList from "./worklog-list/worklog-list";

import Service from "./service";


export default class WorklofPage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          loading: true,
          worklog: []
        };

        this.sortDate = this.sortDate.bind(this);
    }

    sortDate(arr){
      arr.sort(function(a,b){
        return new Date(a.from) - new Date(b.from);
      });
    }

    render(){


        const { loading, worklog } = this.state,
              {employeesId} = this.props;


        let service = new Service(worklog);
        
        if (loading) {
            return <div className="loading">
              <CircularProgress size="120px"/>
              <h1>Loading...</h1>
            </div>;
          }
          else{
          return <WorklogList worklog={service.check()} employeesId={employeesId}/>
          }
    }

    componentDidMount() {
        getWorklog().then((res)=>this.setState({
          worklog: res,
          loading: false
        }))
    }
}