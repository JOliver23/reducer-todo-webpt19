import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lambda Reducer Todo</h1>
      <form>
      <input className="input" type="text" name="task" placeholder="New Todo Task..."/>
      </form>
      <TodoList />
    </div>
  );
}

export default App;
