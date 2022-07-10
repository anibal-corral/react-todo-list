import React from 'react';
import {useLocalStorage} from './useLocalStorage';
const TodoContext = React.createContext();
function TodoProvider(props){
  // const [todos, saveTodos] = useLocalStorage('TODO_V1', []);
const {
    item:todos, 
    saveItems:saveTodos, 
    loading,
  error} = useLocalStorage('TODO_V1', []);
  //To Modal
  const [openModal, setOpenModal]=React.useState(false);
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
        <TodoContext.Provider
        value={
            {loading,
            error,
            totalTodos,
          completedTodosCount,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
        }
        }
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoProvider, TodoContext};