import React from 'react';
import './TodoSearch.css'
function TodoSearch(){
  //SearchValue is empty.
  const [searchValue, setSearchValue] = React.useState('');

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
      <p>{searchValue}</p>
      </React.Fragment>
    )
}


export {TodoSearch}