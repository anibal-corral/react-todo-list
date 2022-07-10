import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css'
function TodoSearch(){
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  //SearchValue is empty.
  // const [searchValue, setSearchValue] = React.useState('');
//Now searchValue and setSearchVale are being received from externeal. In this case from App.js
console.log(`I am filtering for`);
  const onSearchValueChange = (event) => {
    //When user type something, this value is set to searchValue property.
    setSearchValue(event.target.value);
  };

    return(
      <React.Fragment>
      <input  
      className="TodoSearch" 
      placeholder="Onion"
      //set the input value with searchValue value.
      value={searchValue}
      onChange={onSearchValueChange}
      />
      
      </React.Fragment>
    )
}


export {TodoSearch}