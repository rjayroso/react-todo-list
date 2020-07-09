import React, { useState } from 'react';
import PropTypes from 'prop-types'

function AddTodo(props) {
    const [title, setTodoTitle] = useState('');

    function onChange(event) {
        setTodoTitle(event.target.value);
    }

    function onSubmit(event) {
        event.preventDefault();
        props.addTodoItem(title);
        setTodoTitle('');
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
            <input 
                type="text" 
                name="title" 
                placeholder="Add Todo ..."
                style={{ flex: '10', padding: '5px' }}
                value={title}
                onChange={onChange}
            />
            <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
    );
}

AddTodo.propTypes = {
    addTodoItem: PropTypes.func.isRequired
}

export default AddTodo;