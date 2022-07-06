import React from "react";
import { Link } from "react-router-dom";
import "./TodoFooter.css";

class TodoFooter extends React.Component {
  render() {
    if (this.props.countTodo > 0) {
      return (
        <footer className="footerTodo">
          <input type='checkbox' checked={this.props.checked} onChange={() => {
            this.props.selectAll();
          }}
            className="checkAll" />
          <ul className="filters">
            <li>
              <input type="radio" name="radio" value="all"
                onChange={() => {
                  this.props.getTodos('all');
                }} />
              All
            </li>
            <li>
              <input type="radio" name="radio" value="active"
                onChange={() => {
                  this.props.getTodos('active');
                }} />
              Active
            </li>
            <li>
              <input type="radio" name="radio" value="completed"

                onChange={() => {
                  this.props.getTodos('completed');
                }} />
              Completed
            </li>
          </ul>
          <button onClick={() => {
            this.props.deleteCompleted();
          }}>Del Compl</button>
          <p>Total: {this.props.countTodo}</p>
        </footer>
      );
    }
  }
}

export default TodoFooter;
