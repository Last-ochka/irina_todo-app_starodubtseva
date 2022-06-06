import React from "react";
import * as myConstClass from "./constans.js";
import TodoItem from "./TodoItem"

class  TodoEntryField extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {name: ""};
        this.onChange = this.onChange.bind(this);
   }
    handleClick () {
        myConstClass.taskList.push(this.state.name);
        this.setState({name: ''});
}
   onEnterDown (e) {
        if(e.keyCode === 13) {
           this.handleClick ();
        }} 

onChange = (e) => {
    var val = e.target.value;
    this.setState({name: val});
};

 render (){
    return (
        <div>
            <input 
            onKeyDown={(e)=>this.onEnterDown(e)}
            placeholder="What needs to be done?"
            value={this.state.name} 
            onChange={this.onChange}></input>
           {(myConstClass.taskList.map(function(element, index) {
      return <TodoItem newTask={element} />;}))}
   
            
        </div>
    );
} }


export default TodoEntryField;