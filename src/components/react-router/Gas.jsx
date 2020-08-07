import React from 'react';
import {Link} from "react-router-dom";
import {getContacts} from "./contactService";
import BackButton from "./BackButton";

class Gas extends React.Component{
  state = {
    contacts: getContacts()
  };
  render() {
    const {match} = this.props;
    const {contacts} = this.state;
    const topic = contacts.find(({id}) => id === match.params.topicId);
    return(
        <div>
          <h1 className='large-header'>
            {topic.name}
          </h1>
          <h3 className='header text-center'>
            {topic.description}
          </h3>
          <ul>
            {topic.resources.map((sub) => (
                <li key={sub.id}>
                  <Link to={`/topics/${match.params.topicId}/${sub.id}`}>
                    {sub.name}
                  </Link>
                </li>
            ))}
          </ul>

          <BackButton
              goto={'/topics'}
          />
        </div>
    );
  }
}

export default Gas;