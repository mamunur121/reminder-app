import React from 'react';

class UserInput extends React.Component{
    state = {
        fname: "",
        lname: "",
        username: "",
        games: 0,
        unique: true
    };

    handleChange = e => {
      const name = e.target.name;
      const value = e.target.value;

      //console.log(this.state.unique);
      this.setState({
          [name]: value,
          unique: true,
      })

    };

    fieldAreValid = () => {
        const { fname, lname, username } = this.state;
        const valid = fname.length > 0 && lname.length > 0 && username.length > 0;
        return valid;
    };

    addUser = e => {
        e.preventDefault();
        console.log(this.props.users);
        console.log(this.state.username);

        if(this.props.users.filter(user => user.username === this.state.username).length > 0) {
            console.log('Username already taken');
            console.log(this.state.unique);
            this.setState({
                unique: false
            })
        } else {
            console.log(this.state.unique);
            this.setState({
                unique: true
            });

            this.props.saveUser({...this.state});
        }
    };
    render() {
        const { fname, lname, username } = this.state;
        return(
            <div>
                <h3>Add User</h3>
                <form onSubmit={this.addUser}>
                    <label>
                        First Name:
                        <input
                            name='fname'
                            type='text'
                            value={fname}
                            onChange={this.handleChange}
                            className='form-element'
                        />
                    </label>

                    <br />

                    <label>
                        Last Name:
                        <input
                            name="lname"
                            type="text"
                            value={lname}
                            onChange={this.handleChange}
                            className="form-element"
                        />
                    </label>

                    <br />

                    <label>
                        Username:
                        <input
                            name='username'
                            type='text'
                            value={username}
                            onChange={this.handleChange}
                            className={!this.state.unique ? "form-element error" : "form-element"}
                        />
                        {!this.state.unique && (
                            <span className="red">Username must be unique!</span>
                        )}
                    </label>
                    <br/>
                    <button disabled={!this.fieldAreValid()}>Add</button>
                </form>
            </div>
        );
    }
}

export default UserInput;