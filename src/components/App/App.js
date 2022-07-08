import React from 'react';
import { AppUI } from './AppUI';
const defaultTodos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:false },
]
//Function recive a string as a key which we use to go to localstorage
function useLocalStorage(itemName, initialValue){
  const [loading, setLoading]=React.useState(true)
  const [error, setError]=React.useState(false)
  const [item, setItems] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
    try {
      const localStorageItem = localStorage.getItem(itemName);
      //As the first time localstorage wil be empty. So we need to create it.
      let parsedItems;
      
      if(!localStorageItem){
      //No TODOs 
      // console.log('No encuentro el local storage asi que lo creare con algo mientras');
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItems=initialValue;
      }else{
        //TODOs
        // console.log('Hay algo en el localstorage');
        parsedItems = JSON.parse(localStorageItem);
      }  
setItems(parsedItems);
setLoading(false);
    
    } catch (error) {
      setError(error);
      
    }}, 5000);
  })

  //Function to save todos in local storgae 
const saveItems = (newItems)=> {

try {
  const stringifidItems= JSON.stringify(newItems);
  localStorage.setItem(itemName, stringifidItems);
  setItems(newItems);
} catch (error) {
  setError(error);
}  
};
// console.log('Render before useEffect');
// React.useEffect(()=>{
//   console.log('Use Effect'.padEnd(100,"*"));
// },
// parsedItems
// );
// console.log('Render after useEffect');


return {item,
  saveItems,
  loading,
error}
}


function App() {
// const [todos, saveTodos] = useLocalStorage('TODO_V1', []);
const {
  item:todos, 
  saveItems:saveTodos, 
  loading,
error} = useLocalStorage('TODO_V1', []);


//Set this for TodoSearch Component
const [searchValue, setSearchValue]=React.useState('');

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
  loading={loading}
  error={error}
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
