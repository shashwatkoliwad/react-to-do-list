import React from 'react';


const ToDoList = (props) => {
  return(
    <div>
      <input type="checkbox" onChange={props.checkBoxEvent}/>
      <li htmlFor='opt-in'>{props.list}</li>
      <button onClick={props.delTask}>Delete</button>
    </div>
  )
}

export default ToDoList;
