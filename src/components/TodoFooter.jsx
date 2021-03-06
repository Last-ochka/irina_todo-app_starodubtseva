import React from "react";
import "./TodoFooter.css";
import * as myConstClass from "./../components/constans.js";

class TodoFooter extends React.Component {
  render() {
    if (this.props.countTodo > 0) {
      return (
        <footer className="footerTodo">
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={() => {
              this.props.selectAll();
            }}
            className="checkAll"
          />
          <ul className="filters">
            <li>
              <input
                type="radio"
                name="radio"
                value="all"
                onChange={() => {
                  this.props.getTodos("all");
                }}
              />
              {myConstClass.SORTING_ALL}
            </li>
            <li>
              <input
                type="radio"
                name="radio"
                value="active"
                onChange={() => {
                  this.props.getTodos("active");
                }}
              />
              {myConstClass.SORTING_ACTIVE}
            </li>
            <li>
              <input
                type="radio"
                name="radio"
                value="completed"
                onChange={() => {
                  this.props.getTodos("completed");
                }}
              />
              {myConstClass.SORTING_COMPLETED}
            </li>
          </ul>
          <p>{myConstClass.TOTAL_COUNT}{this.props.countTodo}</p>
          <button
            onClick={() => {
              this.props.deleteCompleted();
            }}
          >
            Del Compl
          </button>
          
        </footer>
      );
    }
  }
}

export default TodoFooter;
