import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [editRender, setEditRender] = useState(false);

  if (props.mode === "edit" && !editRender) {
    setNewTitle(props.todos[0].title);
    setEditRender(true);
  }

  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const addNewTodoHandler = () => {
    let nTitle = newTitle;
    setNewTitle("");
    setEditRender(false);
    return props.addTodoHandler(nTitle);
  };

  let btnString = "إضافة";
  if (props.mode === "edit") {
    btnString = "تعديل ..";
  }

  return (
    <div className="todos-form">
      <div className="todos-form_icon" onClick={props.showUncompleteHandle}>
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          onChange={newTitleHandler}
          value={newTitle}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={addNewTodoHandler}
          disabled={newTitle.trim() ? false : true}
        >
          {btnString}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
