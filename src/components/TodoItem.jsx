import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    // this.elemChecked = this.elemChecked.bind(this);
    this.state = {
      newElem: this.props.newTask,
      elemEdit: false,
    };
    this.editTodo = this.editTodo.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onEnterDown = this.onEnterDown.bind(this);
  }
  editTodo() {
    this.setState({ elemEdit: !this.state.elemEdit });
  }

  //  this.props.todoIsChecked(this.state.elemIsChecked);

  onClickEdit = (e) => {
    this.setState({ newElem: e.target.value });
  };

  onEnterDown(e, item) {
    if (e.keyCode === 13) {
      this.props.editTodo(item);
    }

  }
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={() => {
            this.props.todoIsChecked();
          }}
          name={this.props.name}
        />

        {this.state.elemEdit ?
          <input className="edit-todo"
            onKeyDown={(e) => this.onEnterDown(e, this.state.newElem)}
            onBlur={() => this.props.editTodo(this.state.newElem)}
            onChange={this.onClickEdit}
            value={this.state.newElem}
            autoFocus
          />
          :
          <label
            onClick={() => {
              this.props.todoIsChecked();
            }}
            htmlFor={this.props.name}
            onContextMenu={() => {
              this.editTodo();
            }}
          >
            {this.props.newTask}
          </label>
        }
        <button
          className="edit"
          onClick={() => {
            this.editTodo();
          }}
        />

        <button
          className="delete"
          onClick={() => {
            this.props.deleteTodo();
          }}
        />
      </div>

    );
  }
}

export default TodoItem;

