import React from 'react';
import {getContacts} from "./contactService";
import BackButton from "./BackButton";

class GasExtension1 extends React.Component{
  state = {
    contacts: getContacts()
  };
  render() {
    const {match} = this.props;
    const {contacts} = this.state;
    const topic = contacts.find(({ id }) => id === match.params.topicId)
        .resources.find(({ id }) => id === match.params.subId);
    return(
        <div>
          <div className='text-center'>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              <a href={topic.url}>More info.</a>
          </div>
          <BackButton
              goto={`/topics/${match.params.topicId}`}
          />
        </div>
    );
  }
}

export default GasExtension1;