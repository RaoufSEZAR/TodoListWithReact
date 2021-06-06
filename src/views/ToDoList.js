import React, { useState } from "react";

import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";

const TodoList = () => {
  // const initialState = [
  //   { id: 1, title: "شراء مستلزمات", done: false },
  //   { id: 2, title: "شراء منتجات", done: true },
  //   { id: 3, title: "مشاهدة الكورس", done: false },
  //   { id: 4, title: "كتابة الكود", done: true },
  // ];
  const initialState = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState(initialState);
  const [activeTodo, setActiveTodo] = useState({});
  // mode => add || not-done || edit
  const [mode, setMode] = useState("add");

  const setToLocal = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const changeTodoCompletion = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });
    setToLocal(newTodos);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.filter((el) => el.id !== id);
    setToLocal(newTodos);
    setTodos(newTodos);
  };

  const addTodoHandler = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };

      const newTodos = [...todos, newTodo];
      setToLocal(newTodos);
      setTodos(newTodos);
    } else {
      const curTodos = [...todos];
      const newTodos = curTodos.map((el) => {
        if (el.id === activeTodo.id) {
          el.title = title;
          return el;
        }
        return el;
      });
      setToLocal(newTodos);
      setTodos(newTodos);
      setActiveTodo({});
      setMode("add");
    }
  };

  const showUncompleteHandle = () => {
    if (mode === "not-done") {
      setMode("add");
    } else {
      setMode("not-done");
    }
  };
  let currentTodos = [...todos];

  if (mode === "not-done") {
    currentTodos = currentTodos.filter((todo) => !todo.done);
  }

  const editTodo = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };

  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosForm
            addTodoHandler={addTodoHandler}
            showUncompleteHandle={showUncompleteHandle}
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            mode={mode}
          />
          <Todos
            todos={mode !== "edit" ? currentTodos : [activeTodo]}
            changeTodoCompletion={changeTodoCompletion}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default TodoList;
