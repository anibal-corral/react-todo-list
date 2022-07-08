import React from 'react';
import './CreateTodoButton.css'
function CreateTodoButton(){

    const onClickButton = (msg) => {
        alert(msg);
      };

    return(
        <React.Fragment>
 <button 
        className='CreateTodoButton'
        onClick={onClickButton}

        >+</button>
        </React.Fragment>
    )
}

export {CreateTodoButton};