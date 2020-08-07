import React, { Component } from 'react';
import Calendar from 'react-calendar';
import BackButton from "./BackButton";
import {Link} from "react-router-dom";

class Calender extends Component {
  state = {
    date: new Date(),
  };

  onChange = date => this.setState({ date });

  render() {
    const {match} = this.props;
    return (
        <div className='container'>
          <h2>My contract ends on:</h2>
          <p>Select the date of the contract end here.</p>
          <Calendar
              onChange={this.onChange}
              value={this.state.date}
          />
          <button
              type='button'
              className="btn btn-success btn-lg btn-block my-4"
          >
            <Link
                to={`/players/${match.params.topics}/providers/${match.params.topicId}/${match.params.subId}/calender`}
                style={{textDecoration: 'none',  color: '#FFF'}}
            >
              save reminder
            </Link>

          </button>

          <BackButton
              style={{textDecoration: 'none'}}
              goto={`/players/${match.params.topics}/providers/${match.params.topicId}`}
          />
        </div>
    );
  }
}

export default Calender;