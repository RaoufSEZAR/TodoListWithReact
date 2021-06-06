import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

const TodoListForm = (props) => {
	const [newTitle, setNewTitle] = useState("");
	const newTitleHandler = (event) => {
		setNewTitle(event.target.value);
	};
	const addNewTodoHandler = () => {
		let nTitle = newTitle;
		setNewTitle("");
		return props.addTodoHandler(nTitle);
	};
	return (
		<div className="todos-form">
			<div className="todos-form_icon" onClick={props.showUnComplateHandler}>
				<FeatherIcon icon="circle" />
			</div>
			<div className="todos-form_form">
				<input
					type="text"
					placeholder="أضف مهمة جديدة......"
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
					إضافة
				</button>
			</div>
		</div>
	);
};

export default TodoListForm;
