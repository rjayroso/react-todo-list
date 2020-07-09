import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About';
import Header from './components/layout/Header';
import Todos from './components/Todo/Todos';
import AddTodo from './components/Todo/AddTodo';
// import { v4 as uuid } from 'uuid';
import axios from 'axios';


import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (todos.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => setTodos(res.data));
    }
  });

  function addTodoItem(title) {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => setTodos([...todos, res.data]));

    /*
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }

    setTodos([...todos, newTodo]);
    */
  }

  function toggleComplete(id) {
    setTodos(todos.map(todoitem => {
      if(todoitem.id === id) {
        todoitem.completed = !todoitem.completed;
      }

      return todoitem;
    }));
  }

  function deleteTodoItem(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => setTodos(todos.filter(todoitem =>
        todoitem.id !== id)));

    /*
    setTodos(todos.filter(todoitem =>
      todoitem.id !== id));
    */
  }

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/react-todo-list" render={props => (
            <React.Fragment>
              <AddTodo addTodoItem={addTodoItem}/>
              <Todos 
                todos={todos} 
                toggleComplete={toggleComplete} 
                deleteTodoItem={deleteTodoItem}
              />
            </React.Fragment>
          )} />
          <Route path="/react-todo-list/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;