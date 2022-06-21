import React from "react";
import { Link  } from "react-router-dom";

class TodoFooter extends React.Component {
render() {
    if (this.props.countTodo > 0) {
    return (
        <footer className="footerTodo">
            <ul className="filters">
                <li>
                    <Link onClick={this.props.filterAll} to="/">
                        All
                    </Link>
                </li>
              
                <li>
                    <Link onClick={this.props.filterActive} to="/active">
                        
                        Active
                    </Link>
                </li>
              
                <li>
                    <Link onClick={this.props.filterCompleted} to="/completed">
                        Completed
                    </Link>
                </li> 
            </ul>
            </footer>)}}}

            
            export default TodoFooter;
