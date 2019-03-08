import React from 'react';

const Input = (props) =>{
  return(
    <div>
      <input type="text" onKeyPress={props.handleKeyPress} />
    </div>
  )
}

export default Input;
