import React from "react";
import TodoList from "./TodoList";

const TodoItem=({todo})=>{
    const{text}=todo
    return(
        <div>
            {text}
        </div>
    )
}

export default TodoItem;