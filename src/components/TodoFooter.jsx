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
        </footer>
      );
    }
  }
}

export default TodoFooter;
