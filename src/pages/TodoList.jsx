import React from "react";
import TodoItem from "./../components/TodoItem";
import TodoForm from "./../components/TodoForm";
import TodoFooter from "./../components/TodoFooter";
import Pagination from "./../components/Pagination";
import * as myConstClass from "./../components/constans.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      filterParameter: JSON.parse(localStorage.getItem("filter")) || "all",
      allChecked: false,
      todoChangeChecked: 0,
      todoTaskList: JSON.parse(localStorage.getItem("tasks")) || [],
      listForRender: [],
      todosPage: [],
      startIndex:
        myConstClass.PAGE_SIZE *
        ((JSON.parse(localStorage.getItem("page")) || 1) - 1),
      endIndex:
        myConstClass.PAGE_SIZE *
        (JSON.parse(localStorage.getItem("page")) || 1),
      currentPage: JSON.parse(localStorage.getItem("page")) || 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.todoIsChecked = this.todoIsChecked.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deleteCompleted = this.deleteCompleted.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.getTodos = this.getTodos.bind(this);
  }

  componentDidMount() {
    this.getTodos(this.state.filterParameter);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterParameter !== this.state.filterParameter) {
      const filter = this.state.filterParameter;
      localStorage.setItem("filter", JSON.stringify(filter));
    }

    if (
      prevState.todoTaskList !== this.state.todoTaskList ||
      prevState.todoChangeChecked !== this.state.todoChangeChecked
    ) {
      this.setState({
        listForRender: this.state.todoTaskList,
      });
      let tasklist = this.state.todoTaskList;
      if (
        tasklist.every(function (element) {
          return element.checked === true;
        })
      ) {
        this.setState({
          allChecked: true,
        });
      } else {
        this.setState({
          allChecked: false,
        });
      }
      this.getTodos(this.state.filterParameter);
      const tasks = this.state.todoTaskList;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    if (prevState.listForRender !== this.state.listForRender) {
      this.setState({
        todosPage: this.state.listForRender.slice(
          this.state.startIndex,
          this.state.endIndex
        ),
      });
    }
    if (prevState.currentPage !== this.state.currentPage) {
      this.setState({
        startIndex: myConstClass.PAGE_SIZE * (this.state.currentPage - 1),
        endIndex: myConstClass.PAGE_SIZE * this.state.currentPage,
        todosPage: this.state.listForRender.slice(
          myConstClass.PAGE_SIZE * (this.state.currentPage - 1),
          myConstClass.PAGE_SIZE * this.state.currentPage
        ),
      });
      let page = this.state.currentPage;
      localStorage.setItem("page", JSON.stringify(page));
    }
  }

  addTodo(item) {
    this.setState({
      todoTaskList: [
        ...this.state.todoTaskList,
        { todo: item, checked: false, id: Math.random() },
      ],
    });
  }

  selectAll() {
    let arr = [];
    let tasklist = this.state.todoTaskList;
    if (
      tasklist.every(function (element) {
        return element.checked === true;
      })
    ) {
      arr = tasklist.map((el) => ({ ...el, checked: false }));
    } else {
      arr = tasklist.map((el) => ({ ...el, checked: true }));
      this.setState({
        allChecked: true,
      });
    }
    this.setState({
      todoTaskList: arr,
    });
  }

  deleteCompleted() {
    const filtredList = this.state.todoTaskList.filter(
      (item) => item.checked === false
    );
    this.setState({
      todoTaskList: filtredList,
    });
  }

  deleteTodo(elementId) {
    this.setState({
      todoTaskList: this.state.todoTaskList.filter(
        (todo, id) => todo.id !== elementId
      ),
    });
  }

  editTodo(neew, elementId) {
    let arr = this.state.todoTaskList;
    arr.find((x) => x.id === elementId).todo = neew;
    this.setState({
      todoTaskList: arr,
    });
  }

  todoIsChecked(elementId) {
    let arr = this.state.todoTaskList;
    arr.find((x) => x.id === elementId).checked = !arr.find(
      (x) => x.id === elementId
    ).checked;
    this.setState({
      todoTaskList: arr,
      todoChangeChecked: Math.random(),
    });
  }

  getTodos(a) {
    const filtredList = this.state.todoTaskList.filter((todo) => {
      if (a === "active") {
        return !todo.checked;
      } else if (a === "completed") {
        return todo.checked;
      } else {
        return todo;
      }
    });
    this.setState({
      listForRender: filtredList,
      filterParameter: a,
      currentPage: 1,
    });
  }
  goToPage(page) {
    let start = myConstClass.PAGE_SIZE * (page - 1);
    let end = myConstClass.PAGE_SIZE * page;
    this.setState({
      startIndex: start,
      endIndex: end,
      currentPage: page,
    });
  }

  render() {
    return (
      <div className="todoList">
        <TodoForm addTodo={this.addTodo} />
        <TodoFooter
          getTodos={this.getTodos}
          filterParameter={this.state.filterParameter}
          deleteCompleted={this.deleteCompleted}
          selectAll={this.selectAll}
          countTodo={this.state.todoTaskList.length}
          checked={this.state.allChecked}
        />
        {this.state.todosPage.map((element) => {
          return (
            <TodoItem
              key={Math.random()}
              newTask={element.todo}
              elemEdit={this.elemEditing}
              deleteTodo={() => this.deleteTodo(element.id)}
              editTodo={(neew) => this.editTodo(neew, element.id)}
              checked={element.checked}
              name={element}
              todoIsChecked={() => this.todoIsChecked(element.id)}
            />
          );
        })}
        <Pagination
          totalPageCount={Math.ceil(
            this.state.listForRender.length / myConstClass.PAGE_SIZE
          )}
          currentPage={this.state.currentPage}
          goToPage={this.goToPage}
        />
      </div>
    );
  }
}

TodoList.defaultProps = {
  show: "all",
};
export default TodoList;
