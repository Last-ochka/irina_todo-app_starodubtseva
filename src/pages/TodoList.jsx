import React from "react";
import TodoItem from "./../components/TodoItem";
import TodoForm from "./../components/TodoForm";
import TodoFooter from "./../components/TodoFooter";


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoTaskList: [] };
    this.addTodo = this.addTodo.bind(this);
    this.state = { todoTaskList: [], todoChecked: false, todoTaskListActive: [], todoTaskListCompleted: [] };//           JSON.parse(localStorage.getItem('tasks')) ||
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
    this.todoIsChecked = this.todoIsChecked.bind(this);
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
  }

  editingTodo(neew, index) {
    let arr = this.state.todoTaskList;
    arr[index] = neew;
    this.setState({
      todoTaskList: arr
    });
  }

  todoIsChecked(checked, element, index) {
    // console.log(`list chek ${checked}`);
    this.setState({ todoChecked: checked });
//  console.log(`list ${this.state.todoChecked}`);

    if (this.state.todoChecked === true) {
      this.setState({ todoTaskListCompleted: [...this.state.todoTaskListCompleted, element] })
    };

    if (this.state.todoChecked === false) {
      let splicedTaskList = this.state.todoTaskList.splice(index, 1);
      this.setState({ todoTaskListCompleted: splicedTaskList })
    };

    let filteredTaskList = this.state.todoTaskList.filter((x) => {
      return this.state.todoTaskListCompleted.indexOf(x) < 0;
    });
    this.setState({ todoTaskListActive: filteredTaskList });

  }

  renderSwitch(marker) {
    switch (marker) {
      case 'active':
        return this.state.todoTaskListActive;
        break;
      case 'completed':
        return this.state.todoTaskListCompleted;
        break;
      default:
        return  this.setState({
          filtredTodoTaskList: this.state.todoTaskList
        });

    }
  }

  render() {
    return (
      <div className="todoList">
        <TodoForm addTodo={this.addTodo} />

{/*  {(this.renderSwitch(this.props.marker)) */}
        {this.state.filtredTodoTaskList.map((element, index) => {

          return <TodoItem key={Math.random()}
            newTask={element}
            elemEdit={this.elemEditing}
            deleteTodo={() => this.deleteTodo(index)}
            editingTodo={(neew) => this.editingTodo(neew, index)}
            checked={this.state.todoChecked}
            todoIsChecked={(checked) => this.todoIsChecked(checked, element)}
          />;
        })}
        <TodoFooter
         countTodo={this.state.todoTaskList.length} />
      </div>
    );

  }
}

export default TodoList;
