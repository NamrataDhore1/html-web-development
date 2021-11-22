import React,{ Component }from "react";
//import EmpTable from "/empTable";
//import EmployeeTable from "/empTable";
import EmployeeTable from "./employeesTable";

class Home extends React.Component {
    state={
        count:0,
    
        employees:[
            {
                id:100,
            empName:"nama",
            salary:20000

            },
            {
                id:100,
            empName:"nama",
            salary:20000
            },
            {
                id:100,
            empName:"namak",
            salary:20001
            },
        ],
    };
    render() { 
        return (

        <div>
            <EmployeeTable emps={this.state.employees}
            count={this.state.count}/>
        </div>
        );
    }
}
 
export default Home;