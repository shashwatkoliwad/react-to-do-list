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
 }

 keyVal(e){
   let toDo = {id:uuid.v4(),task:e.target.value,status:false}
   if(e.key === "Enter"){
     if(e.target.value !== undefined){
     this.setState({
       toDoList: [...this.state.toDoList, toDo]
     }, () => {console.log(this.state.toDoList);});}
   }
 }


  render() {
    return (
      <div className="App">
        <Input handleKeyPress={this.keyVal} />
          {this.state.toDoList.map((list) =><ToDoList list={list.task} />)}
      </div>
    );
  }
}

export default App;
