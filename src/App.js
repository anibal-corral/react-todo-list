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
  {text: 'Activate token Karmapoint', completed:true },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:true },
]

function App() {
//Set this for TodoSearch Component
const [searchValue, setSearchValue]=React.useState('');
const [todos, setTodos] = React.useState(defaultTodos);
const completedTodosCount = todos.filter((todo)=>!!todo.completed).length;
const totalTodos = todos.length;

//Filter todos
let searchedTodos=[]//to save 
if(!searchValue.length>0){
  console.log('True');
  searchedTodos = todos;
}else{
  //Filter todos
  const searchText = searchValue.toLowerCase();
  searchedTodos =  todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchText);
    }
  )
}

//function to set todo completed
const completeTodo = (text) => {
  //Search the index of todo to delete
  const todoIndex = searchedTodos.findIndex((todo)=>todo.text === text);
  //Copy of ALL todos to manipulate them.
  const newTodos = [...searchedTodos];
  //Set completed
  searchedTodos[todoIndex].completed=true;
  //set Todos 
  setTodos(newTodos)
}
//function to delete todo
const deleteTodo = (text) => {
  //Search the index of todo to delete
  const todoIndex = searchedTodos.findIndex((todo)=>todo.text === text);
  //Copy of ALL todos to manipulate them.
  const newTodos = [...searchedTodos];
  //Delete todo index from array
  newTodos.splice(todoIndex,1);
  //set Todos 
  setTodos(newTodos)
}


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
  );
}

export default App;
