import React, {Component} from 'react';

class TodoItem extends Component{
    render() {
        const {items, onDeleteItem, onEditItem }= this.props;
        return(
            <React.Fragment>
                {items.map(item => (
                    <li key={item.id}
                        className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                        <h6>{item.item}</h6>
                        <div className='todo-icon'>

                            <span className='mx-2 text-success'
                                  onClick={()=> onEditItem(item.id)}
                            >
                                <i className='fa fa-pen' />
                            </span >
                            <span className='mx-2 text-danger'
                                  onClick={()=> onDeleteItem(item.id)}>
                                <i className='fa fa-trash' />
                            </span>
                        </div>
                    </li>
                ))}

            </React.Fragment>
        );
    }
}

export default TodoItem;


/*
A different approach to delete an item
// App.js
class App extends Component {
  state = {
    contacts: [
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: 'karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      // more records..
     ]
  };
  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id;
      })
    }));
  };
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}





// Method 1
<button
  className="contact-remove"
  onClick={() => props.onDeleteContact(contact)}
>
  Remove
</button>

 */