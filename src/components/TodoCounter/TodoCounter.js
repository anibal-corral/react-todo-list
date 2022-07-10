import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css'
function TodoCounter(){
    const {totalTodos, completedTodosCount} = React.useContext(TodoContext);
    return(
        <h2 className='TodoCounter'>Done {totalTodos} of {completedTodosCount} TODOs</h2>
    )
}

// export default TodoCounter;
export {TodoCounter}