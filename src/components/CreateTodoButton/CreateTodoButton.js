import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import {Modal} from '../Modal/Modal'
import './CreateTodoButton.css'

function CreateTodoButton(){
const {openModal, setOpenModal} = React.useContext(TodoContext);
// console.log(openModal);
    const onClickButton = () => {
        setOpenModal(!openModal);
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