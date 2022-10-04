import React, { useState } from "react";

const TodoForm = (props) => {
  const [items, setItems] = useState(props.edit ? props.edit.value : "");

  const addOnEnter = (e) => {
    if (e.key === "Enter") {
      if (!items) {
      } else {
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          title: items,
          completed: false,
        });
        setItems("");
      }
    }
  };
  return (
    <div>
      <div className="task">
        {props.edit ? (
          <input
            type="text"
            className="add-todo"
            placeholder="Update your todo..."
            value={items}
            onKeyDown={addOnEnter}
            onChange={(e) => setItems(e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="add-todo"
            placeholder="Add your todo..."
            value={items}
            onKeyDown={addOnEnter}
            onChange={(e) => setItems(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default TodoForm;
