import React from "react";
import { Link } from "react-router-dom";
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
          <button
            onClick={() => {
              this.props.deleteCompleted();
            }}
          >
            Del Compl
          </button>
          <p>Total: {this.props.countTodo}</p>
        </footer>
      );
    }
  }
}

export default TodoFooter;
