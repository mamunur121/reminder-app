import React from 'react';
import {Link} from "react-router-dom";

import Input from "./Input";
import BackButton from "../react-router/BackButton";

class Gas extends React.Component {
  state = {
    account: {
      postfach: '',
      place: '',
      uses: '',
    },
    games: '',
    errors: {}
  };
  validate = () => {
    const errors={};
    const {account} = this.state;

    if(account.postfach.trim().length < 5) {
      errors.postfach = 'Only 5 digits are allowed.';
    }
    if(account.place.trim() === '') {
      errors.place = 'Place is required';
    }

    if(account.uses.trim() === '') {
      errors.uses = 'Only numbers are allowed.';
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
    if(name === 'postfach') {
      if(value.trim().length < 5) return 'Only 5 digits are allowed.';
    }

    if(name === 'place') {
      if(value.trim() === '') return 'Place is required';
    }

    if(name === 'uses') {
      if(value.trim() === '') return 'Only numbers are allowed.';
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
  handleChanges = e => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(this.state.unique);
    this.setState({
      [name]: value,
    })
  };
  handleIncrement = () => {
    this.setState({
      games: 55,
      backgroundColor: 'red'
    })
  };
  handleIncrement1 = () => {
    this.setState({
      games: 255
    })
  };
  handleIncrement2 = () => {
    this.setState({
      games: 450
    })
  };
  handleIncrement3 = () => {
    this.setState({
      games: 600
    })
  };
  fieldAreValid = () => {
    const { postfach, place, uses } = this.state;
    const valid = postfach.length > 0 && place.length > 0 && uses.length > 0;
    return valid;
  };
  render() {
    const {account, errors} = this.state;
    const {match} = this.props;
    return(
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <form onSubmit={this.handleSubmit}>
                <Input
                    name='postfach'
                    value={account.postfach}
                    label='Enter Ihre Postleitzahl'
                    onChange={this.handleChange}
                    placeholder='Ihre Postleitzahl'
                    type='number'
                    error={errors.postfach}
                />

                <Input
                    name='place'
                    value={account.place}
                    label='Enter Ihre Place'
                    onChange={this.handleChange}
                    placeholder='Ihre Place'
                    type='text'
                    error={errors.place}
                />

                <Input
                    name='uses'
                    value={account.uses}
                    label='Enter Ihre Verbauch in KWh'
                    onChange={this.handleChange}
                    placeholder='Ihre Verbauch in KWh'
                    type='number'
                    error={errors.uses}
                />

                <div className="row bg-success mt-2 adjust-size">
                  <div className="col-sm border-under text-center" onClick={this.handleIncrement}>
                    <i className="fas fa-user text-white" />
                  </div>
                  <div className="col-sm border-under text-center" onClick={this.handleIncrement1}>
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                  </div>
                  <div className="col-sm border-under text-center" onClick={this.handleIncrement2}>
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                  </div>
                  <div className="col-sm border-under text-center" onClick={this.handleIncrement3}>
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                    <i className="fas fa-user text-white" />
                  </div>
                </div>

                <input
                    name='games'
                    className='form-control mt-2 mb-4'
                    type="text"
                    placeholder="Ihre Verbauch in KWh"
                    value={this.state.games}
                    onChange={this.handleChanges}
                />



                <button
                    type='button'
                    className="btn btn-success btn-lg btn-block mb-4"
                    disabled={!this.fieldAreValid}>
                  <Link
                      to={`/players/${match.params.topics}/providers`}
                      style={{textDecoration: 'none',  color: '#FFF'}}
                  >
                    Further
                  </Link>

                </button>
              </form>
              <BackButton
                  style={{textDecoration: 'none'}}
                  goto={'/players'}
              />
            </div>
          </div>
        </div>
    );
  }
}
export default Gas;