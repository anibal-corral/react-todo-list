import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';
function TodoForm (){

const {addTodo, setOpenModal} = React.useContext(TodoContext);
const [newTodoValue, setNewTodoValue] = React.useState('');



function onAdd(event){
event.preventDefault();
addTodo(newTodoValue);
setOpenModal(false);
}
function onCancel(){
setOpenModal(false);
    
}
function onChange(event){
    setNewTodoValue(event.target.value);
}

    return (
        <form onSubmit={onAdd}>
            <label>Add your todo</label>
            <textarea
            placeholder='Working out'
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button 
                type="button" 
                onClick={onCancel}
                className="TodoForm-button TodoForm-button--cancel"
                >Cancel</button>
                <button type='submit'
                className="TodoForm-button TodoForm-button--add"
                >Add</button>
            </div>

        </form>
    )
}

export {TodoForm}