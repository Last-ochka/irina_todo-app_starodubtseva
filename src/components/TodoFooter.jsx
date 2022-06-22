import React from "react";
import { Link } from "react-router-dom";
import "./TodoFooter.css";

class TodoFooter extends React.Component {
  render() {
    if (this.props.countTodo > 0) {
      return (
        <footer className="footerTodo">
            <p>{this.props.countTodo}</p>
            <button onClick={() => {
            this.props.selectAll();
          }} className="checkAll">All</button>

          <ul className="filters">
            <li>
              <Link to="/">
                All
              </Link>
            </li>

            <li>
              <Link  to="/active">
                Active
              </Link>
            </li>

            <li>
              <Link to="/completed"
              >
                Completed
              </Link>
            </li>
          </ul>

          <button onClick={() => {
            this.props.deleteCompleted();}}>Del Compl</button>
        </footer>
      );
    }
  }
}

export default TodoFooter;
