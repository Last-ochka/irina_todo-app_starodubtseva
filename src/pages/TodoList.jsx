import React from "react";
import TodoItem from "./../components/TodoItem";
import TodoForm from "./../components/TodoForm";
import TodoFooter from "./../components/TodoFooter";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todoTaskList: JSON.parse(localStorage.getItem("tasks")) || [],
      listForRender: [],
    }; //           JSON.parse(localStorage.getItem('tasks')) подключить local storage
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
    this.todoIsChecked = this.todoIsChecked.bind(this);
    this.showCompletedTodo = this.showCompletedTodo.bind(this);
    this.showAllTodo = this.showAllTodo.bind(this);
    this.showActiveTodo = this.showActiveTodo.bind(this);
  }

  componentDidMount() {
    localStorage.setItem("tasks", JSON.stringify(this.state.todoTaskList));
  }

  addTodo(item) {
    this.setState({
      todoTaskList: [
        ...this.state.todoTaskList,
        { todo: item, checked: false },
      ],
      listForRender: [
        ...this.state.todoTaskList,
        { todo: item, checked: false },
      ],
    });
  }

  deleteTodo(index) {
    this.setState({
      todoTaskList: this.state.todoTaskList.filter((todo, id) => id !== index),
      listForRender: this.state.todoTaskList.filter((todo, id) => id !== index),
    });
  }

  editingTodo(neew, index) {
    let arr = this.state.todoTaskList;
    arr[index].todo = neew;
    this.setState({
      todoTaskList: arr,
      listForRender: arr,
    });
  }

  todoIsChecked(checked, element, index) {
    let arr = this.state.todoTaskList;
    arr[index].checked = !arr[index].checked;
    this.setState({
      todoTaskList: arr,
      listForRender: arr,
    });
  }

  showAllTodo() {
    this.setState({
      listForRender: this.state.todoTaskList,
    });
  }
  showActiveTodo() {
    const filtredList = this.state.todoTaskList.filter(
      (item) => item.checked === false
    );
    this.setState({
      listForRender: filtredList,
    });
  }
  showCompletedTodo() {
    const filtredList = this.state.todoTaskList.filter((item) => item.checked);
    this.setState({
      listForRender: filtredList,
    });
  }

  render() {
    return (
      <div className="todoList">
        <TodoForm addTodo={this.addTodo} />
        {this.state.listForRender.map((element, index) => {
          return (
            <TodoItem
              key={Math.random()}
              newTask={element.todo}
              elemEdit={this.elemEditing}
              deleteTodo={() => this.deleteTodo(index)}
              editingTodo={(neew) => this.editingTodo(neew, index)}
              checked={element.checked}
              todoIsChecked={(checked) =>
                this.todoIsChecked(checked, element, index)
              }
            />
          );
        })}
        <TodoFooter
          showCompletedTodo={this.showCompletedTodo}
          showAllTodo={this.showAllTodo}
          showActiveTodo={this.showActiveTodo}
          countTodo={this.state.todoTaskList.length}
        />
      </div>
    );
  }
}

export default TodoList;
