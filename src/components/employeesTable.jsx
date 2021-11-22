import React from 'react';
 const EmployeeTable = (props) => {
  const { emps, count } = props;
   return ( 
   <div>
       <h1  className="display-6 text-center fw-bold text-dark back">Employee Table</h1>
    <table className="table table-dark table-striped w-50 mx-auto ">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>empName</th>
                    <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map((emp)=>(
                     <tr>
                     <td>{emp.id}</td>
                     <td>{emp.empName}</td>
                     <td>{emp.salary}</td>


                 </tr>
                      )  )}
                   
                </tbody>
            </table>
    </div>

    );
 }
  
 export default EmployeeTable;