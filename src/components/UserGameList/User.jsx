import React from 'react';

class User extends React.Component{
    render() {
        const { fname, lname, username, games } = this.props.user;
        return(
            <tr>
                <td>{fname}</td>
                <td>{lname}</td>
                <td>{username}</td>
                <td>
                    {username} played {this.props.hide ? '*' : games} games
                </td>
            </tr>
        );
    }
}

export default User;