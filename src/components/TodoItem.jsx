import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div className="todo-item">
        <input id="task" type="checkbox" name="name" />
        <label >{this.props.newTask}</label>
      </div> //onclick  htmlFor="task" new for every task! onChange={(e) => this.props.changeTodo(e, this.props.newTask)}  onDoubleClick={this.props.changeTodo(this.state.newTask)}
    );
  }
}

export default TodoItem;
