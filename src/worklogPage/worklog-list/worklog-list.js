import React from 'react';
import WorklogListItem from './worklog-lost-item/worklog-list-item';




const WorklogList = ({worklog, employeesId})=>{

    const elements = worklog.map((item)=>{
        return(
                <tr key={item.id}>
                    <WorklogListItem
                        data={item}
                    />
                </tr>
                
            )

        // if(item.employee_id === +employeesId){
        //     return(
        //         <tr key={item.id}>
        //             <WorklogListItem
        //                 data={item}
        //             />
        //         </tr>
                
        //     )
        // }
        // return null
	})

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Entrance</th>
                    <th>Exit</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    )
}
export default WorklogList