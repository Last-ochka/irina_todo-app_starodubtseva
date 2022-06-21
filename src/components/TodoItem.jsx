import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.elemChecked = this.elemChecked.bind(this);
    this.state = { checked: false, newElem: this.props.newTask, elemEdit: false };
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
  }

  onEnterDown(e, item) {
    if (e.keyCode === 13) {
      this.props.editingTodo(item)
    }
  }
  elemChecked(e) {
    this.setState({
      checked: !this.state.checked
    });

  }

  componentDidUpdate(prevState) {
    console.log(`item ${this.state.checked}`)
    if (prevState.checked !== this.state.checked) {
      this.props.todoIsChecked(this.state.checked);
    }
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox"
          checked={this.state.checked}
          onChange={(e) => { this.elemChecked(e) }}
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
            autoFocus

          /> :
          <label onDoubleClick={() => { this.editTodo() }}>{this.props.newTask}</label>}

        <button className="delete"
          onClick={() => { this.props.deleteTodo() }} />
      </div>
    );
  }
}

export default TodoItem;

