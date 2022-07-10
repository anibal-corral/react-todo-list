//This file is for separete Stateless from stateful
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';

function AppUI(
 
){
// const value = React.useContext(TodoContext);
const {
  error, 
  loading, 
  searchedTodos,
  completeTodo,
  deleteTodo} = React.useContext(TodoContext);

    return (
<React.Fragment>
     <TodoCounter/> 
  
    <TodoSearch/>
    
    <TodoList>
    {error && <p>Error</p>}
      {loading && <p>Loading</p>}
      {(!loading && !searchedTodos.length)&& <p>Create your first todo</p>}
      {searchedTodos.map(todo=>(
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete = {()=>completeTodo(todo.text)}
        onDelete = {()=>deleteTodo(todo.text)}
        />
      ))}
    </TodoList> 
    <CreateTodoButton/>
   
    </React.Fragment>
    )
}

export {AppUI};