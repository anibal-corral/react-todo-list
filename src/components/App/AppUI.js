//This file is for separete Stateless from stateful
import React from 'react';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';

function AppUI(
    {totalTodos,
    completedTodosCount,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}
){
    return (
<React.Fragment>
     <TodoCounter
     total={totalTodos}
     completed = {completedTodosCount}
     /> 
  
    <TodoSearch
    //Send values to SearchComponent
    /** 
     *  searchValue and setSearchValue are the arguments' name in todosearch component
     *  {searchValue} and {setSearchValue} are values.
    */
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    />
    
    <TodoList>
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