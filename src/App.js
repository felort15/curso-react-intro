import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { id: 1, text: 'tomar agua', completed: true },
  { id: 2, text: 'comer', completed: true },
  { id: 3, text: 'dormir', completed: true },
  { id: 4, text: 'comer', completed: true },
  { id: 5, text: 'dormir', completed: true },
  { id: 6, text: 'comer', completed: true },
  { id: 7, text: 'dormir', completed: true },
  { id: 8, text: 'comer', completed: true },
  { id: 9, text: 'dormir', completed: true },
];

function App() {
  return (
    <React.Fragment>
        <TodoCounter totalTodos={defaultTodos.length} completedTodos={2} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.id}
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </React.Fragment>
  );
}

export default App;