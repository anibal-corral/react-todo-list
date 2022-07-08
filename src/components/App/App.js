import React from 'react';
import { AppUI } from './AppUI';
const defaultTodos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:false },
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
  // console.log('True');
  searchedTodos = todos;
  // console.log(todos);
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
  <AppUI
  totalTodos={totalTodos}
  completedTodosCount = {completedTodosCount}
  searchValue = {searchValue}
  setSearchValue = {setSearchValue}
  searchedTodos = {searchedTodos}
  completeTodo ={completeTodo}
  deleteTodo = {deleteTodo}
    />    
  );
}

export default App;
