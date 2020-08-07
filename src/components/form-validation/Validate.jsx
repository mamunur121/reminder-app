import React from 'react';
import LoginForm from "./LoginForm";
import Input from "./Input";
class Validate extends React.Component{
  state = {
    account: {
      username: '',
      password: '',
    },
    errors:{},
  };

  validate = () => {
    const errors={};
    const {account} = this.state;

    if(account.username.trim().length < 3) {
      errors.username = 'Username is required';
    }
    if(account.password.trim() === '') {
      errors.password = 'Password is required';
    }

    return Object.keys(errors).length === 0 ? null :errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({
      errors: errors || {}
    });
    if(errors) return;
    console.log('Submitted');
  };

  validateProperty = ({name, value}) => {
    if(name === 'username') {
      if(value.trim() === '') return 'Username is required';
    }

    if(name === 'password') {
      if(value.trim() === '') return 'Password is required';
    }
  };

  handleChange = e => {
    const errors = {...this.state.errors};
    const errorMessages = this.validateProperty(e.currentTarget);
    if(errorMessages) errors[e.currentTarget.name] = errorMessages;
    else delete errors[e.currentTarget.name];
    const account = {...this.state.account};
    account[e.currentTarget.name]= e.currentTarget.value;
    //console.log(this.state.unique);
    this.setState({
      account, errors
    })
  };

  render() {
    const {account, errors} = this.state;
    return(
        <div>
          <LoginForm />
          <form onSubmit={this.handleSubmit}>
            <Input
                name='username'
                value={account.username}
                label='Username'
                onChange={this.handleChange}
                placeholder='Enter your name'
                type='text'
                error={errors.username}
            />
            <Input
                name='password'
                value={account.password}
                label='Password'
                onChange={this.handleChange}
                placeholder='Enter your password'
                type='password'
                error={errors.password}
            />

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default Validate;