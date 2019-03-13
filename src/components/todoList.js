import React from 'react';
import "./toDo.css";

const ToDoList = (props) => {
  return(
    <div id = "parent">
      <input type="checkbox" onChange={props.checkBoxEvent}/>
      <span id="task-disp" htmlFor='opt-in'>{props.list}</span>
      <button className="shadow" onClick={props.delTask}>Delete</button>
    </div>
  )
}

export default ToDoList;
