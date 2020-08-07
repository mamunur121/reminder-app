import React from 'react';

import {Link} from "react-router-dom";
import {getContacts} from "./contactService";

class Categories extends React.Component{
  state = {
    contacts: getContacts()
  };
  render() {
    const {contacts} = this.state;
    return(
        <div className='container two-column'>
          <div className='container'>
            <h2 className='large-header'>
              Create a reminder
            </h2>
            <h3 className='header text-center'>
              Which end of contract can we remind you of?
            </h3>
            <p className='text-center'>
              Simply select the appropriate category and your provider.
            </p>
            <div className='home-grid'>
              <ul>
                {contacts.map(({ name, id }) => (
                    <li key={id}>
                      <Link to={`/topics/${id}`}>{name}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default Categories;