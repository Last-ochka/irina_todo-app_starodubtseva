import React from "react";
import { Link } from "react-router-dom";

class TodoFooter extends React.Component {
  render() {
    if (this.props.countTodo > 0) {
      return (
        <footer className="footerTodo">
            <p>{this.props.countTodo}</p>
          <ul className="filters">
            <li>
              <Link onClick={() => this.props.showAllTodo()} to="/">
                All
              </Link>
            </li>

            <li>
              <Link onClick={() => this.props.showActiveTodo()} to="/active">
                Active
              </Link>
            </li>

            <li>
              <Link
                onClick={() => this.props.showCompletedTodo()}
                to="/completed"
              >
                Completed
              </Link>
            </li>
          </ul>
        </footer>
      );
    }
  }
}

export default TodoFooter;
