import React from 'react';
import './App.css';
import UserInput from "./UserInput";


class UserGameList extends React.Component{
    state = {
         users: []
    };

    // add user
    saveUser = user => {
        this.setState(prevState=> ({
           users:[...prevState.users, user]
        }))
    };

    render() {
        const {users} = this.state;
        return(
            <div className="App">
                <main className="App-main">
                    <div className="container">
                        <UserInput
                            users={users}
                            saveUser={this.saveUser}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

export default UserGameList;