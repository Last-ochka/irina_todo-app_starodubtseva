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
      smthChange: 0,
      todoTaskList: JSON.parse(localStorage.getItem("tasks")) || [],
      listForRender: [],
      todosPage: [],
      startIndex: myConstClass.PAGE_SIZE * ((JSON.parse(localStorage.getItem("page")) || 1) - 1),
      endIndex: myConstClass.PAGE_SIZE * (JSON.parse(localStorage.getItem("page")) || 1),
      currentPage: JSON.parse(localStorage.getItem("page")) || 1,
      selectedAll: '',
      selectedActive: '',
      selectedCompleted: '',
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
    this.goToPage = this.goToPage.bind(this);
  }

  componentDidMount() {
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
    if ((prevState.todoTaskList !== this.state.todoTaskList) || (prevState.smthChange !== this.state.smthChange)) {
      this.setState({
        listForRender: this.state.todoTaskList,
      })
      const tasks = this.state.todoTaskList;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    if (prevState.listForRender !== this.state.listForRender) {
      this.setState({
        todosPage: this.state.listForRender.slice(this.state.startIndex, this.state.endIndex),
      })
    }
    if (prevState.currentPage !== this.state.currentPage) {
      this.setState({
        startIndex: myConstClass.PAGE_SIZE * (this.state.currentPage - 1),
        endIndex: myConstClass.PAGE_SIZE * this.state.currentPage,
      })
    }

    if (prevState.startIndex !== this.state.startIndex) {
      this.setState({
        todosPage: this.state.listForRender.slice(this.state.startIndex, this.state.endIndex),
      })
      let page = this.state.currentPage;
      localStorage.setItem("page", JSON.stringify(page));
    }

    if ((prevProps.show !== this.props.show) || (prevState.smthChange !== this.state.smthChange)) {
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
        { todo: item, checked: false, id: Math.random() },
      ],
    });
  }

  selectAll() {
    let arr = [];
    let tasklist = this.state.todoTaskList;
    if (tasklist.every(function (element) {
      return element.checked === true;
    })) {
      arr = tasklist.map((el) => (
        { ...el, checked: false }
      ));
    }
    else {
      arr = tasklist.map((el) => (
        { ...el, checked: true }
      ));
    }
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

  deleteTodo(elementId) {
    this.setState({
      todoTaskList: this.state.todoTaskList.filter((todo, id) => todo.id !== elementId),
    });
  }

  editingTodo(neew, elementId) {
    let arr = this.state.todoTaskList;
    arr.find(x => x.id === elementId).todo = neew;
    this.setState({
      todoTaskList: arr,
    });
  }

  todoIsChecked(elementId) {
    let arr = this.state.todoTaskList;
    arr.find(x => x.id === elementId).checked = !arr.find(x => x.id === elementId).checked;
    this.setState({
      todoTaskList: arr,
      smthChange: Math.random(),
    });
  }

  showAllTodo() {
    this.setState({
      listForRender: this.state.todoTaskList,
      selectedAll: 'selected',
      selectedActive: '',
      selectedCompleted: '',
    });
  }
  showActiveTodo() {
    const filtredList = this.state.todoTaskList.filter(
      (item) => item.checked === false
    );
    this.setState({
      listForRender: filtredList,
      currentPage: 1,
      selectedAll: '',
      selectedActive: 'selected',
      selectedCompleted: '',
    });
  }
  showCompletedTodo() {
    const filtredList = this.state.todoTaskList.filter((item) => item.checked);
    this.setState({
      listForRender: filtredList,
      currentPage: 1, // нужно ли запоминать страницу аквтиных и завершенных? и настраивать роутинг страниц
      selectedAll: '',
      selectedActive: '',
      selectedCompleted: 'selected',
    });
  }
  goToPage(page) {

    let start = myConstClass.PAGE_SIZE * (page - 1);
    let end = myConstClass.PAGE_SIZE * page;
    this.setState({
      startIndex: start,
      endIndex: end,
      currentPage: page,
    })
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
          selectedAll={this.state.selectedAll}
          selectedActive={this.state.selectedActive}
          selectedCompleted={this.state.selectedCompleted}
        />
        {this.state.todosPage.map((element) => {
          return (
            <TodoItem
              key={Math.random()}
              newTask={element.todo}
              elemEdit={this.elemEditing}
              deleteTodo={() => this.deleteTodo(element.id)}
              editingTodo={(neew) => this.editingTodo(neew, element.id)}
              checked={element.checked}
              name={element}
              todoIsChecked={() =>
                this.todoIsChecked(element.id)
              }
            />
          );
        })}
        <Pagination
          totalPageCount={Math.ceil(((this.state.listForRender).length) / myConstClass.PAGE_SIZE)}
          currentPage={this.state.currentPage}
          goToPage={this.goToPage}
        />
      </div>
    );
  }
}

TodoList.defaultProps = {
  show: 'all'
};
export default TodoList;
