import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const todos = ["Learn React", "Compontent"];

    return (
        <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
        </ul>
    );
  }
}

export default App;
