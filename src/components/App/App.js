import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext/TodoContext';
const defaultTodos = [
  {text: 'Bathe my daughter', completed:false },
  {text: 'Activate token Karmapoint', completed:false },
  {text: 'Drink a glass of milk', completed:false },
  {text: 'Send DNS to Rodrigo', completed:false },
]



function App() {


  return (
    <TodoProvider>
  <AppUI/>    
  </TodoProvider>
  );
}

export default App;
