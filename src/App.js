import React, { Component } from 'react';
import './App.css';
import Input from './components/input';
import uuid from 'uuid';
import ToDoList from './components/todoList';

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    toDoList:[{id:1, task:"abc"}]
   }
   this.keyVal = this.keyVal.bind(this);
   this.checkBoxEvent = this.checkBoxEvent.bind(this);
 }

 keyVal(e){
   let toDo = {id:uuid.v4(),task:e.target.value,status:false}
   if(e.key === "Enter"){
     e.preventDefault();
     if(e.target.value !== undefined){
     this.setState({
       toDoList: [...this.state.toDoList, toDo]
     }, () => {console.log(this.state.toDoList);});}
     e.target.value = ""
   }

 }

checkBoxEvent= (e)=>{
 if(e.target.checked){
   console.log(e.target.nextSibling.style.textDecoration = "line-through")

 }
}

delTask=(index, e) =>{
   const tasks = Object.assign([],this.state.toDoList);
   tasks.splice(index, 1);
   this.setState({toDoList:tasks})
}

  render(){
    return (
      <div className="App">
        <Input handleKeyPress={this.keyVal} />
          {this.state.toDoList.map((list, index) => <ToDoList list={list.task}
           checkBoxEvent={this.checkBoxEvent}
           delTask={this.delTask.bind(this,index)}/>)}
      </div>
    );
  }
}

export default App;
