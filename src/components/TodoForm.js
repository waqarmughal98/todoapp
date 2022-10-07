import React, { useState } from "react";

const TodoForm = (props) => {
  const [items, setItems] = useState(props.edit ? props.edit.value : "");

  const updateText = (e) => {
    setItems(e.target.value);
  };

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

  const addOnEdit = (e) => {
    if (!items) {
    } else {
      props.onSubmit({
        id: props.edit.id,
        title: items,
        completed: false,
      });
      setItems("");
    }
  };
  return (
    <div className="form-todos">
      {props.edit ? (
        <div className="task">
          <input
            type="text"
            className="add-todo"
            placeholder="Update your todo..."
            value={items}
            onChange={updateText}
          />
          <button type="submit" className="btn-primary" onClick={addOnEdit}>
            Save
          </button>
        </div>
      ) : (
        <div className="add-task">
          <input
            type="text"
            className="add-todo"
            placeholder="Add your todo..."
            value={items}
            onKeyDown={addOnEnter}
            onChange={(e) => setItems(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default TodoForm;
