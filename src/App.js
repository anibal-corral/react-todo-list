// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
const todos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
]

function App() {
  return (
    <React.Fragment>
     <TodoCounter/> 
    
    <TodoSearch/>
    <input placeholder="Onion"/>
    <TodoList>
      {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
   
    </React.Fragment>
  );
}

export default App;
