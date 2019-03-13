import React from 'react';

const Input = (props) =>{
  return(
    <div>
      <label>Add task</label>
      <input type="text" onKeyPress={props.handleKeyPress} />
    </div>
  )
}

export default Input;
