import React from 'react';
import {getContacts} from "./contactService";

class Home extends React.Component{
  state = {
    contacts: getContacts()
  };
  render() {
    return(
        <div className='container'>
          <h1 className='large-header'>
            Hash History Basketball League
          </h1>
        </div>
    );
  }
}

export default Home;