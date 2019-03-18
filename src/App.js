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
     })}

     e.target.value = "";
   }

 }

 componentDidMount() {
   this.hydrateStateWithLocalStorage();
   window.addEventListener(
     "beforeunload",
     this.saveStateToLocalStorage.bind(this)
   );
 }

 componentWillUnmount() {
   window.removeEventListener(
     "beforeunload",
     this.saveStateToLocalStorage.bind(this)
   );

   // saves if component has a chance to unmount
   this.saveStateToLocalStorage();
 }

 hydrateStateWithLocalStorage() {
   // for all items in state
   for (let key in this.state) {
     // if the key exists in localStorage
     if (localStorage.hasOwnProperty(key)) {
       // get the key's value from localStorage
       let value = localStorage.getItem(key);

       // parse the localStorage string and setState
       try {
         value = JSON.parse(value);
         this.setState({ [key]: value });
       } catch (e) {
         // handle empty string
         this.setState({ [key]: value });
       }
     }
   }
 }

 saveStateToLocalStorage() {
   // for every item in React state
   for (let key in this.state) {
     // save to localStorage
     localStorage.setItem(key, JSON.stringify(this.state[key]));
   }
 }




  checkBoxEvent= (e)=>{
   ((e.target.checked)?e.target.nextSibling.style.textDecoration = "line-through":
   e.target.nextSibling.style.textDecoration = "null")

  }



  delTask=(index, e) =>{
     const tasks = Object.assign([],this.state.toDoList);
     tasks.splice(index, 1);
     this.setState({toDoList:tasks})
  }

  render(){
    return (
      <div className="App">
      <h3>Your To Do List</h3>
        <Input handleKeyPress={this.keyVal} />
          {this.state.toDoList.map((list, index) => <ToDoList list={list.task}
           checkBoxEvent={this.checkBoxEvent}
           delTask={this.delTask.bind(this,index)}/>)}
      </div>
    );
  }
}

export default App;
