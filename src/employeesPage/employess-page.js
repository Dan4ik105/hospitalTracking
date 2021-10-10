import React, {Component} from "react";
import { getEmployees } from "../api";
import EmployeesList from "./employees-list/employees-list";
import CircularProgress from '@mui/material/CircularProgress';

import './employees-page.css'


export default class EmployeesPage extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          loading: true,
          employees: []
        };
        this.sortFullName = this.sortFullName.bind(this);
    
      }

    sortFullName(arr){
        arr.sort((a, b)=>{
            if(a.fullName < b.fullName) { return -1; }
            if(a.fullName > b.fullName) { return 1; }
            return 0;
        })
    }

    render(){
        const { loading, employees } = this.state;

        const data = employees.map((item)=>{
          let dateArray = item.birthDate.split("-");
          return {
            id: item.id,
            fullName: `${item.lastName} ${item.firstName} ${item.middleName}`,
            birthDate: `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`
          }
        })
        this.sortFullName(data)
    
        if (loading) {
          return <div className="loading">
            <CircularProgress size="120px"/>
            <h1>Loading...</h1>
          </div>;
        }
        else{
        return <>
              <header>Список сотрудников</header> 
              <EmployeesList employees={data}/>
            </>
        }
    }

    componentDidMount() {
        getEmployees().then((res)=>this.setState({
          employees: res,
          loading: false
        }))
    }
}