import React, {Component} from "react";

import './worklog-list-item.css'


export default class WorklogListItem extends Component{
    render(){
        console.log(this.props.data);
        const {from, to, red} = this.props.data
        if (red){
            return(
                <>
                    <td>{from}</td>
                    <td className="red">{to}</td>
                </>
            )
        }else{
            return(
                <>
                    <td>{from}</td>
                    <td>{to}</td>
                </>
            )
        }
        
    }
}