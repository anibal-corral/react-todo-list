import React from 'react';
import './TodoItem.css';
function TodoItem(props){
const onComplete = () => {
    alert(`Task ${props.text} is done`);
    props.completed=true;
}
const onDelete = () => {
    alert(`Erasing task ${props.text}`);
    // props.completed=true;
}

return (
    <li className="TodoItem">
        <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
        
        >√</span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span  
        className="Icon Icon-delete"
        onClick={onDelete}
        
        >X</span>
    </li>
);
}

export {TodoItem};