import React from 'react';
//Function recive a string as a key which we use to go to localstorage
function useLocalStorage(itemName, initialValue){
    const [loading, setLoading]=React.useState(true)
    const [error, setError]=React.useState(false)
    const [item, setItems] = React.useState(initialValue);
    React.useEffect(()=>{
      setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        //As the first time localstorage wil be empty. So we need to create it.
        let parsedItems;
        
        if(!localStorageItem){
        //No TODOs 
        // console.log('No encuentro el local storage asi que lo creare con algo mientras');
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems=initialValue;
        }else{
          //TODOs
          // console.log('Hay algo en el localstorage');
          parsedItems = JSON.parse(localStorageItem);
        }  
  setItems(parsedItems);
  setLoading(false);
      
      } catch (error) {
        setError(error);
        
      }}, 5000);
    })
  
    //Function to save todos in local storgae 
  const saveItems = (newItems)=> {
  
  try {
    const stringifidItems= JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifidItems);
    setItems(newItems);
  } catch (error) {
    setError(error);
  }  
  };
  // console.log('Render before useEffect');
  // React.useEffect(()=>{
  //   console.log('Use Effect'.padEnd(100,"*"));
  // },
  // parsedItems
  // );
  // console.log('Render after useEffect');
  
  
  return {
    item,
    saveItems,
    loading,
    error}
  }

  export {useLocalStorage};