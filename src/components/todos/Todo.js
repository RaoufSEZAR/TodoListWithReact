import React from "react";
import FeatherIcon from "feather-icons-react";

const Todo = (props) => {
  let { id, title, done } = props.todo;
  return (
    <div className={done ? "todos-todo done" : "todos-todo "}>
      <div
        className="todos-todo_icon"
        onClick={() => props.changeTodoCompletion(id)}
      >
        <FeatherIcon icon={done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text"> {title} </div>
      <div className="todos-todo_cta">
        <div
          className="todos-todo_cta-edit"
          onClick={() => props.editTodo(props.todo)}
        >
          <FeatherIcon icon="edit" size="20" />
        </div>
        <div
          className="todos-todo_cta-delete"
          onClick={() => props.deleteTodo(id)}
        >
          <FeatherIcon icon="trash-2" size="20" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
