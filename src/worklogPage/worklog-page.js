import React, {Component} from "react";
import { getEmployees, getWorklog } from "../api";
import CircularProgress from '@mui/material/CircularProgress';
import WorklogList from "./worklog-list/worklog-list";

import Service from "./service";
import './worklog-page.css'


export default class WorklofPage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          loading: true,
          employees: [],
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
        let fullName = this.state.employees.map(item=>{
              if(item.id === +employeesId){
                return `${item.lastName} ${item.firstName} ${item.middleName}`
              }
            })

        if (loading) {
            return <div className="loading">
              <CircularProgress size="120px"/>
              <h1>Loading...</h1>
            </div>;
          }
          else{
            return <>
              <header>
                <div className="employee-name">Сотрудник: {fullName} </div>
                <div className="employee-id">ID сотрудника: {employeesId}</div>
              </header>
              <WorklogList worklog={service.check()} employeesId={employeesId}/>
            </>
          }
    }

    componentDidMount() {
        getEmployees().then(res=>this.setState({
          employees: res
        }))
        getWorklog().then((res)=>this.setState({
          worklog: res,
          loading: false
        }))
    }
}