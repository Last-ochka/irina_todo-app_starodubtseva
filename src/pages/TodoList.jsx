import React from "react";
import TodoItem from "./../components/TodoItem";
import TodoForm from "./../components/TodoForm";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoTaskList: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(item) {
    this.setState({
      todoTaskList: [...this.state.todoTaskList, item],
    });
  }

  render() {
    return (
      <div className="todoList">
        <TodoForm addTodo={this.addTodo} />
        {this.state.todoTaskList.map(function (element, index) {
          return <TodoItem key={Math.random()} newTask={element} />;
        })}
      </div>
    );
  }
}

export default TodoList;
