import React, { Component } from 'react';

import TeamLogo from "./TeamLogo";
import {getTeamNames} from "./api";
import {Link} from "react-router-dom";



export default class Players extends Component {
  state = {
    teamNames: []
  };
  componentDidMount () {
    getTeamNames()
        .then((teamNames) => this.setState(() => ({
          teamNames
        })))
  };

  render() {
    const { teamNames } = this.state;
    return (
        <div className='container'>
          <h1 className='large-header'>
            Create a reminder
          </h1>
          <p className='text-center'>Simply select the appropriate category and your supplier.</p>
          <h3 className='header text-center text-primary'>
            Select one of the Services
          </h3>
          <div className='row' >
            {teamNames.map((id) => (
            <div className='col-sm-12 col-md-6 col-lg-4 p-2' key={id}>
                  <Link
                      to={`/players/${id}`}
                      style={{ textDecoration: 'none' }}
                  >
                    <p className='text-center bg-light text-dark'>
                        <span className='d-block font-weight-bold'>
                          <TeamLogo id={id}/>
                        </span>
                    </p>
                  </Link>
            </div>
              ))}
          </div>
        </div>
    )
  }
}
