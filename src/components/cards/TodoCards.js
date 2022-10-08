import React, { useState } from "react";

const TodoCards = (props) => {
  const elm = props.elm;
  // console.log(elm);

  // States
  const [title, setTitle] = useState();
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState(false);

  // On Update Callback
  const updateItem = (id) => {
    props.updateListItem(id, title);
    setEdit(false);
  };

  // Update Status
  const updateStatus = (id) => {
    props.todoStatus(id, !status);
    setStatus(!status);
  };

  // Delete List
  const deleList = (ind) => {
    props.delList(ind);
  };

  return (
    <div className="task todo-tasks todo-div animate-delay-6">
      {!edit ? (
        <label className="task-title">
          <input type="checkbox" onChange={() => updateStatus(props.index)} />
          <svg
            className={`checkbox ${elm.completed ? "checkbox--active" : null}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke={elm.completed ? "#fff" : "none"}
            />
          </svg>
          <p className={elm.completed ? "text--active" : null}>{elm.title}</p>
        </label>
      ) : (
        <div className="task">
          <input
            type="text"
            className="add-todo"
            placeholder="Update your todo..."
            value={title ? title : elm.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      )}

      <div>
        {!edit ? (
          <div className="dropdown-container" tabIndex="-1">
            <div className="three-dots"></div>
            <div className="dropdown">
              <div
                className="d-text"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </div>

              <div
                className="d-text del"
                onClick={() => {
                  deleList(elm.id);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="btn-primary"
            onClick={() => updateItem(props.index)}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoCards;
