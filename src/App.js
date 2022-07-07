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
  {text: 'Send DNS to Rodrigo', completed:true },
]

function App() {
  return (
    <React.Fragment>
     <TodoCounter/> 
    
    <TodoSearch/>
    
    <TodoList>
      {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
   
    </React.Fragment>
  );
}

export default App;
