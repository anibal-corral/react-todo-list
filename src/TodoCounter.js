import React from 'react';
import './TodoCounter.css'
function TodoCounter({total, completed}){
    return(
        <h2 className='TodoCounter'>Done {completed} of {total} TODOs</h2>
    )
}

// export default TodoCounter;
export {TodoCounter}