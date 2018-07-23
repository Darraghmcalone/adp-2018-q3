import React, { Component } from 'react';
import './App.css';

const ToDo = (original, todo) => {}
return <li>{original}. {todo}</li>

class App extends Component {
  render() {
    const todos = ["Learn React", "Compontent"];

    return (
      <div >
        <ul className="todo-list">
        {todos.map((todo, i) => <ToDo key={i}>{todo}</ToDo>)}
        </ul>
        </div>
    );
  }
}

export default App;
