import React from 'react';

class GameToggle extends React.Component{
    render() {
        const {hide, toggleGames} = this.props;
        return(
            <button onClick={toggleGames}>
                {hide ?
                    "Show the Number of Games Played"
                    : "Hide the Number of Games Played"
                }
            </button>
        );
    }
}

export default GameToggle;