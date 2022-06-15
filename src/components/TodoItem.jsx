import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.chengeCheckbox = this.chengeCheckbox.bind(this);
    this.state = { checked: false, newElem: this.props.newTask, elemEdit: false };
    this.editTodo = this.editTodo.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onEnterDown = this.onEnterDown.bind(this);
  }
  editTodo() {
    this.setState({ elemEdit: !this.state.elemEdit });
  }

  chengeCheckbox() {
    this.setState({ checked: !this.state.checked });
  }
  onClickEdit = (e) => {
    this.setState({ newElem: e.target.value });
  }

  onEnterDown(e, item) {
    if (e.keyCode === 13) {
      this.props.editingTodo(item)
    }
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox"
          checked={this.state.checked}
          onChange={this.chengeCheckbox}
          name="name" />
        <button className="edit"
          onClick={() => { this.editTodo() }}
        />

        {this.state.elemEdit ?
          <input
            onKeyDown={(e) => this.onEnterDown(e, this.state.newElem)}
            onBlur={() => this.props.editingTodo(this.state.newElem)}
            onChange={this.onClickEdit}
            value={this.state.newElem}
          /> :
          <label>{this.props.newTask}</label>}

        <button className="delete"
          onClick={() => { this.props.deleteTodo() }} />
      </div>
    );
  }
}

export default TodoItem;

