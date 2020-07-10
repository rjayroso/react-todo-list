import React  from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {

    // styling for every todo item
    function getStyle() {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: props.todoitem.completed ?
            'line-through' : 'none'
        };
    }
    
    // matches the value of the checkbox to the value of the todoitem
    function checkValue() {
        return props.todoitem.completed ? true : false;
    }

    // destructure
    const { id, title } = props.todoitem;

    return (
        <div style={getStyle()}>
            <p>
                <input type='checkbox' onChange={props.toggleComplete.bind(this, id)} checked={checkValue()}/>
                {title}
                <button style={btnStyle} onClick={props.deleteTodoItem.bind(this, id)}>x</button>
            </p>
        </div>
    );
}

// PropTypes
TodoItem.propTypes = {
    todoitem: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodoItem: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;