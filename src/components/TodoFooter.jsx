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


              <Link className={this.props.selectedAll} to="/">
                All
              </Link>
            </li>

            <li>
              <Link className={this.props.selectedActive} to="/active">
                Active
              </Link>
            </li>

            <li>
              <Link className={this.props.selectedCompleted} to="/completed"
              >
                Completed
              </Link>
            </li>
          </ul>

          <button onClick={() => {
            this.props.deleteCompleted();}}>Del Compl</button>
            <p>Total: {this.props.countTodo}</p>
        </footer>
      );
    }
  }
}

export default TodoFooter;
