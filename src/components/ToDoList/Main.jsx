import React from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false,
    };

    handleChange =(event)=> {
        this.setState({item: event.target.value});
    };

    // add a new item to the list,
    handleSubmit =(event) =>{
      //  alert('A name was submitted: ' + this.state.item);
        event.preventDefault();

        const {id, item, items, } = this.state;
        const newItem = {
            id: id,
            item: item
        };

        const updatedItems = [...items, newItem];
        console.log('Updates list', updatedItems);
        this.setState({
            items: updatedItems,
            item: '',
            id: uuid(),
            editItem: false,
        });

    };

    // reset every created item
    clearList=()=> {
        console.log(this.state.items);
        this.setState({
            items: [],
        })
    };

    // Method:1 remove specific items
    removeContact = item => {
        this.setState(currentState => ({
            items: currentState.items.filter(c => {
                return c.id !== item.id;
            })
        }));
    };
    // Method 2: remove specific items
    removeContact1 = id => {
       const filteredItems= this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    };
    // update the list item
    handleEdit = id => {
        const filteredItems= this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        console.log(selectedItem);
        this.setState({
            items: filteredItems,
            item: selectedItem.item,
            editItem: true,
            id: id,
        })

    };


    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto mt-t'>
                        <h3 className='text-capitalize text-center'>
                            Todo Input
                        </h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList
                            items={this.state.items}
                            handleClear = {this.clearList}
                            onDeleteItem={this.removeContact1}
                            onEditItem={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default Main;
