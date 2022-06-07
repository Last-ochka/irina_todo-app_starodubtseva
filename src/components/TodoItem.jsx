import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" name="name" />
        <label htmlFor="mame">{this.props.newTask}</label>{" "}
      </div>
    );
  }
}

export default TodoItem;
