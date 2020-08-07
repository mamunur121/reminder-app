import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getPlayers } from './api';
import { parse } from 'query-string';
import slug from 'slug';
import BackButton from "./BackButton";

export default class Providers extends Component {
  state = {
    players: [],
    loading: true,
  };
  componentDidMount () {
    const { location } = this.props;
    location.search
        ? this.fetchPlayers(parse(location.search).teamId)
        : this.fetchPlayers()
  }
  fetchPlayers = (teamId) => {
    getPlayers(teamId)
        .then((players) => this.setState(() => ({
          loading: false,
          players,
        })))
  };
  render () {
    const { players, loading } = this.state;
    const { match, location } = this.props;

    return (
        <div className='container two-column'>
          <Sidebar
              loading={loading}
              title='List of Providers'
              list={players.map((player) => player.name)}
              {...this.props}
          />
          <BackButton
              style={{textDecoration: 'none'}}
              goto={`/players/${match.params.topics}`}
          />
        </div>
    )
  }
}