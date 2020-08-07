import React, {Component} from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component{
    render() {
        const {items, handleClear, onDeleteItem, onEditItem} = this.props;
        return(
            <React.Fragment>
                <ul className='list-group my-5'>
                    <h3 className='text-capitalize text-center'>
                        todo list
                    </h3>
                    <TodoItem
                        items={items}
                        onDeleteItem = {onDeleteItem}
                        onEditItem = {onEditItem}
                    />
                    <button
                        type='button'
                        className='btn btn-danger btn-block text-capitalize mt-5'
                        onClick={handleClear}
                    >
                        clear list
                    </button>
                </ul>
            </React.Fragment>
        );
    }
}

export default TodoList;