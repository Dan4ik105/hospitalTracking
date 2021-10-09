import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './employees-list-item.css'

export default class EmployeesListItem extends Component{
    render(){
        const {id, fullName, birthDate} = this.props.data
        return(
            <>
                <td>{id}</td>
                <td>
                    <Link to={`/employee/${id}/worklog`}>
                        {fullName}
                    </Link> 
                </td>
                <td>{birthDate}</td>
            </>
        )
    }
}


