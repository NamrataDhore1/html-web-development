import React, { Component } from 'react';
class Register extends React.Component {
    render() { 
        return <div>
             <h1 className="display-6 text-center fw-bold text-primary back">Register Page</h1>
             <form class="w-25 mx-auto border border-primary border-2 rounded-end p-3">
        <div class="mb-3">
            <label for="exampleInputname" class="form-label">FirstName</label>
            <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp"/>

        </div>
        <div class="mb-3">
            <label for="exampleInputname" class="form-label">LastName</label>
            <input type="text" class="form-control" id="exampleInputname" aria-describedby="emailHelp"/>

        </div>
        <div class="mb-3">
            <label for="exampleInputContact" class="form-label">Contact Number</label>
            <input type="tel" class="form-control" id="exampleInputContact" aria-describedby="emailHelp"/>

        </div>

        <div class="mb-3">
            <label for="exampleInputEmail" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

        </div>
        <div class="mb-3">
            <label for="exampleInputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword"/>
        </div>
        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">SignUp</button>
        </div>
        <small>Go to the productpage  click <a href="productsample.html">here</a> to visit</small>
    </form>



        </div>;
    }
}
 
export default Register;