import axios from "axios";
import React, { Component } from "react";

class AddAuthor extends React.Component {
    state={
        author:{
        
                      contactno:"",
                      email:"",
                      firstName:"",
                      lastName:"",
                      role:"",
        },
    };
    handleChange=(event)=>{
        const author={...this.state.author};
        author[event.target.name]=event.target.value;
        console.log(event.target.name);
    console.log(event.target.value);
    this.setState({author:author});
    };
    handleSubmit =(event)=>{
        event.preventDefault();
       console.log("handleSubmit"); 
       const author ={
       
        contactno: this.state.author.contactno,
        email:this.state.author.email, 
        firstName:this.state.author.firstName ,
        lastName: this.state.author.lastName,
     
       
    };
    axios
    .post("http://localhost:8081/lms/addAuthor", author)
    .then((res) => {
      this.props.history.push("/author");
    })
    .catch((err) => console.log(err));
};
   

    render() { 
        return (
            <div>
              <h3> Author Section</h3>
              <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
                <div className="mb-3">
                  <label for="exampleInputfirstName" className="form-label">
                  firstName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    value={this.state.author.firstName}
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputlastName" className="form-label">
                  lastName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputlastName"
                    aria-describedby="emailHelp"
                    value={this.state.author.lastName}
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    value={this.state.author.email}
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Contactno
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.author.contactno}
              name="contactno"
              onChange={this.handleChange}
            />
          </div>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                  value={this.state.author.role}
                  name="role"
                  onChange={this.handleChange}
                >
                  <option selected>Select Role</option>

                  <option value="admin">Admin</option>
                </select>
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          );
        }
      }
      
    

 
export default AddAuthor;