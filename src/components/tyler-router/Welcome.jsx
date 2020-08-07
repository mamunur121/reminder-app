import React, { Component } from 'react';
import BackButton from "./BackButton";
import {Link} from "react-router-dom";

class Welcome extends Component{
  render() {
    const {match} = this.props;
    return(
        <div className='container'>
          <div className='text-center'>
            <h1>Welcome to Kartonara.de</h1>
            <p>Thanks for choosing our services</p>
          </div>
          <BackButton
              style={{textDecoration: 'none', textAlign: 'left'}}
              goto={`/players/${match.params.topics}/providers/${match.params.topicId}/${match.params.subId}`}
          />
        </div>
    )
  }
}
export default Welcome;