import React from 'react';
import { AppUI } from './AppUI';
const defaultTodos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:false },
]

function App() {

const localStorageTodos = localStorage.getItem('Todos_v1');
//As the first time localstorage wil be empty. So we need to create it.
let parsedTodos;

if(!localStorageTodos){
//No TODOs 
// console.log('No encuentro el local storage asi que lo creare con algo mientras');
  localStorage.setItem('Todos_v1', JSON.stringify([]));
  parsedTodos=defaultTodos;
}else{
  //TODOs
  // console.log('Hay algo en el localstorage');
  parsedTodos = JSON.parse(localStorageTodos);
}

//Set this for TodoSearch Component
const [searchValue, setSearchValue]=React.useState('');
const [todos, setTodos] = React.useState(parsedTodos);
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

//Function to save todos in local storgae 
const saveTodos = (newTodos)=> {
  const stringifidTodos= JSON.stringify(newTodos);
  localStorage.setItem('Todos_v1', stringifidTodos);
  setTodos(newTodos)
};

//function to set todo completed
const completeTodo = (text) => {
  //Search the index of todo to delete
  const todoIndex = searchedTodos.findIndex((todo)=>todo.text === text);
  //Copy of ALL todos to manipulate them.
  const newTodos = [...searchedTodos];
  //Set completed
  searchedTodos[todoIndex].completed=true;
  //set Todos 
  saveTodos(newTodos)
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
  saveTodos(newTodos)
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
