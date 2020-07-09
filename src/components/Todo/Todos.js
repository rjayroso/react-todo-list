import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {
    return props.todos.map((todoitem) => (
        <TodoItem 
            key={todoitem.id} 
            todoitem={todoitem} 
            toggleComplete={props.toggleComplete}
            deleteTodoItem={props.deleteTodoItem}
        />
    ));
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired
}

export default Todos;