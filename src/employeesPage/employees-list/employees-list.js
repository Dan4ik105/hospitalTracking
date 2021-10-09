import React from 'react'
import EmployeesListItem from './employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({employees})=>{



	const elements = employees.map((item)=>{
		return(
			<tr key={item.id}>
				<EmployeesListItem
					data={item}	
				/>
			</tr>
			
		)
	})
    return(
        <table className="table">
	<thead>
		<tr>
            <th>Id</th>
			<th>Full name</th>
			<th>Birthday</th>
		</tr>
	</thead>
	<tbody>
		{elements}
	</tbody>
</table>
    )
}

export default EmployeesList