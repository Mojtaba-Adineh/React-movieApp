import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors : {}
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if(account.username.trim() === "")
      errors.username = "Username is required!";
    if(account.password.trim() === "")
      errors.password = "Password is required!";

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({errors : errors || {}});
    if(errors) return;

    //Call the server
    console.log("submitted");
  };

  validateProperty = ({name , value}) => {
    if(name === "username"){
      if(value.trim() === "") return "Username is required!"
      //other validations
    }
    if(name === "password"){
         if(value.trim() === "") return "Password is required!"
        //other validations
      }
  }
 
  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account , errors});
  };

  render() {
    const { account , errors } = this.state;

    return (
      <div className="w-50 m-auto mt-5">
        <h1 className="d-flex justify-content-center">Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            error={errors.username}
            onChange = {this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            error={errors.password}
            onChange = {this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
      

    );
  }
}

export default LoginForm;
