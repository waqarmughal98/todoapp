import React, { useState } from "react";

const TodoForm = (props) => {
  const [items, setItems] = useState();
  let int = Math.floor(Math.random() * 10000);
  let varId = int.toString();

  const addOnEnter = (e) => {
    if (e.key === "Enter") {
      if (items) {
        props.onSubmit({
          id: varId,
          title: items,
          completed: false,
        });
        setItems("");
      }
    }
  };

  return (
    <div className="form-todos">
      <div className="add-task">
        <input
          type="text"
          className="add-todo"
          placeholder="Add your todo..."
          value={items ? items : ''}
          onKeyDown={addOnEnter}
          onChange={(e) => setItems(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TodoForm;
