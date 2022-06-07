import React from "react";
import TodoItem from "./TodoItem";
import "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.onChange = this.onChange.bind(this);
    this.onEnterDown = this.onEnterDown.bind(this);
  }

  onChange = (e) => {
    const val = e.target.value;
    this.setState({ name: val });
  };

  onEnterDown(e, item) {
    if (e.keyCode === 13) {
      this.props.addTodo(item);
      this.setState({ name: "" });
    }
  }

  render() {
    return (
      <>
        <input
          onKeyDown={(e) => this.onEnterDown(e, this.state.name)}
          placeholder="What needs to be done?"
          value={this.state.name}
          onChange={this.onChange}
        ></input>
      </>
    );
  }
}

export default TodoForm;
