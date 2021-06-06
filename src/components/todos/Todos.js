import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            changeTodoCompletion={props.changeTodoCompletion}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          />
        );
      })}
      {props.todos.length === 0 ? (
        <h3 className="no-todos">لا يوجد مهام حالية ..</h3>
      ) : null}
    </div>
  );
};

export default Todos;
