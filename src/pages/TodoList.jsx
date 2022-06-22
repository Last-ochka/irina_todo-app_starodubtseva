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
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editingTodo = this.editingTodo.bind(this);
    this.todoIsChecked = this.todoIsChecked.bind(this);
    this.showCompletedTodo = this.showCompletedTodo.bind(this);
    this.showAllTodo = this.showAllTodo.bind(this);
    this.showActiveTodo = this.showActiveTodo.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
  }

  componentDidMount() {
    // this.showAllTodo();
    switch (this.props.show) {
      case 'all':
        this.showAllTodo();
        break;
      case 'active':
        this.showActiveTodo()
        break;
      case 'completed':
        this.showCompletedTodo()
        break;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoTaskList !== this.state.todoTaskList) {
      this.setState({
        listForRender: this.state.todoTaskList,
      })
    }

    const tasks = this.state.todoTaskList;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (prevProps.show !== this.props.show) {
      switch (this.props.show) {
        case 'all':
          this.showAllTodo();
          break;
        case 'active':
          this.showActiveTodo()
          break;
        case 'completed':
          this.showCompletedTodo()
          break;
      }
    }
  }
  addTodo(item) {
    this.setState({
      todoTaskList: [
        ...this.state.todoTaskList,
        { todo: item, checked: false },
      ],
    });

  }
  selectAll() {
    let arr = [];
    let tasklist = this.state.todoTaskList;
    if (tasklist.every(function (element) {
      return element.checked === true;
    })) {
      arr = this.state.todoTaskList.map((el) => (
        { ...el, checked: false }
      ));
    }
    else {
      arr = this.state.todoTaskList.map((el) => (
        { ...el, checked: true }
      ));
    }
    console.log(arr);
    this.setState({
      todoTaskList: arr,
    })
  }
  deleteCompleted() {
    const filtredList = this.state.todoTaskList.filter(
      (item) => item.checked === false
    );
    this.setState({
      todoTaskList: filtredList,
    });
  }

  deleteTodo(index) {
    this.setState({
      todoTaskList: this.state.todoTaskList.filter((todo, id) => id !== index),
    });
  }

  editingTodo(neew, index) {
    let arr = this.state.todoTaskList;
    arr[index].todo = neew;
    this.setState({
      todoTaskList: arr,
    });
  }

  todoIsChecked(checked, element, index) {
    let arr = this.state.todoTaskList;
    arr[index].checked = !arr[index].checked;
    this.setState({
      todoTaskList: arr,
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
        <TodoForm
          addTodo={this.addTodo}
        />
        <TodoFooter
          deleteCompleted={this.deleteCompleted}
          selectAll={this.selectAll}
          showCompletedTodo={this.showCompletedTodo}
          showAllTodo={this.showAllTodo}
          showActiveTodo={this.showActiveTodo}
          countTodo={this.state.todoTaskList.length}
        />
        {this.state.listForRender.map((element, index) => {
          return (
            <TodoItem
              key={Math.random()}
              newTask={element.todo}
              elemEdit={this.elemEditing}
              deleteTodo={() => this.deleteTodo(index)}
              editingTodo={(neew) => this.editingTodo(neew, index)}
              checked={element.checked}
              name={index}
              todoIsChecked={(checked) =>
                this.todoIsChecked(checked, element, index)
              }
            />
          );
        })}

      </div>
    );
  }
}

TodoList.defaultProps = {
  show: 'all'
};
export default TodoList;
