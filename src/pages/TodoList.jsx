import React from "react";
import TodoItem from "./../components/TodoItem";
import TodoForm from "./../components/TodoForm";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoTaskList: [] };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
  }

  addTodo(item) {
    this.setState({
      todoTaskList: [...this.state.todoTaskList, item],
    });
  }
  deleteTodo(index) {
    this.setState({
      todoTaskList: this.state.todoTaskList.filter((todo, id) => id !== index)
    });
    ;
  }

  editingTodo(neew, index) {

    let arr = this.state.todoTaskList;
    arr[index] = neew;
    this.setState({
      todoTaskList: arr
    });

  }

  render() {
    return (
      <div className="todoList">
        <TodoForm addTodo={this.addTodo} />
        {this.state.todoTaskList.map((element, index) => {
          return <TodoItem key={Math.random()}
            newTask={element}
            elemEdit={this.elemEditing}
            deleteTodo={() => this.deleteTodo(index)}
            editingTodo={(neew) => this.editingTodo(neew, index)}

          />;
        })}
      </div>
    );
  }
}

export default TodoList;
