// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
const defaultTodos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:true },
]

function App() {
//Set this for TodoSearch Component
const [searchValue, setSearchValue]=React.useState('');
const [todos, setTodos] = React.useState(defaultTodos);
const completedTodosCount = todos.filter((todo)=>!!todo.completed).length;
const totalTodos = todos.length;
 


  return (
    <React.Fragment>
     <TodoCounter/> 
    
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
      {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
    </TodoList>
    <CreateTodoButton/>
   
    </React.Fragment>
  );
}

export default App;
