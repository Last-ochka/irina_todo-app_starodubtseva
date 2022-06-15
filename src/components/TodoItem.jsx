import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  // this.onClickDel = this.onClickDel.bind(this);
  this.chengeCheckbox = this.chengeCheckbox.bind(this);
  this.state = { checked: false };
   }
   
//  onClickDel(){
      // this.props.deleteTodo();
  // }
  chengeCheckbox (){
    this.setState ({checked: !this.state.checked})
}
 render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.state.checked} onChange={this.chengeCheckbox} name="name" />
         <label>{this.props.newTask}</label>      
         <button onClick={()=>{this.props.deleteTodo()}} /> 
        </div>
    );
  }
}

export default TodoItem;

