//This file is for separete Stateless from stateful
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoList} from '../TodoList/TodoList';
import {TodoItem} from '../TodoItem/TodoItem';
import {Modal} from '../Modal/Modal';
import {TodoForm} from '../TodoForm/TodoForm';
//Loading Skeleton
import {TodosError} from '../TodosError/TodosError';
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";

function AppUI(
 
){
// const value = React.useContext(TodoContext);
const {
  error, 
  loading, 
  searchedTodos,
  completeTodo,
  deleteTodo,
openModal,
setOpenModal
} = React.useContext(TodoContext);

    return (
<React.Fragment>
     <TodoCounter/> 
  
    <TodoSearch/>
    
    <TodoList>
    {error && <TodosError error={error}></TodosError>}
      {loading && <TodosLoading></TodosLoading>}
      {(!loading && !searchedTodos.length)&& <EmptyTodos></EmptyTodos>}
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
    {/* If OpenModal is true then show Modal */}
    {
    openModal && (
    <Modal>
      <TodoForm></TodoForm>
    </Modal>
    )}
    
    <CreateTodoButton
    />
   
    </React.Fragment>
    )
}

export {AppUI};