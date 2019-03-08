import React from 'react';

const ToDoList = (props) => {
  return(
    <div>
      <input type="checkbox" onChange={props.handleCheckbox}/>
      <li>{props.list}</li>
    </div>
  )
}

export default ToDoList;
