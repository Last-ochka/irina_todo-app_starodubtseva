import React from "react";

import TodoEntryField from "./TodoEntryField"


class TodoItem extends React.Component  {
    constructor (props) {
        super(props);
  ;
    }
    render (){ 
    return (
        <div className="todo-item">
            <input type="checkbox" name="name" />
            <label for="mame">{this.props.newTask}</label> </div>
    );
}
}

export default TodoItem;