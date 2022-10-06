import React, { useState } from "react";
import TodoForm from "../TodoForm";

const TodoCards = (props) => {
  //   const list = useContext(Functional);

  const elem = props.elem;
  const list = props.list;
  const setList = props.setupList;

  const [edit, setEdit] = useState({
    id: null,
    title: "",
  });

  const submitUpdate = (title) => {
    updateList(edit.id, title);
    setEdit({
      id: null,
      title: "",
    });
  };

  const updateList = (id, title) => {
    setList(list.map((elem) => (elem.id === id ? title : elem)));
  };

  const delList = (ind) => {
    const deleteList = list.filter((elem) => {
      return ind !== elem.id;
    });

    setList(deleteList);
  };

  const completeList = (id) => {
    const updateList = list.map((elem) => {
      if (id === elem.id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });

    setList(updateList);
  };

  return (
    <div className={`task todo-tasks`} key={props.id}>
      {!edit.id ? (
        <label className="task-title" key={elem.id}>
          <input
            type="checkbox"
            onChange={() => {
              completeList(elem.id);
            }}
            key={elem.id}
          />
          <svg
            className={`checkbox ${elem.completed ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke={elem.completed ? "#fff" : "none"}
            />
          </svg>
          <p className={elem.completed ? "text--active" : ""}>{elem.title}</p>
        </label>
      ) : edit.id === elem.id ? (
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      ) : (
        <label className="task-title" key={elem.id}>
          <input
            type="checkbox"
            onChange={() => {
              completeList(elem.id);
            }}
            key={elem.id}
          />
          <svg
            className={`checkbox ${elem.completed ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke={elem.completed ? "#fff" : "none"}
            />
          </svg>
          <p className={elem.completed ? "text--active" : ""}>{elem.title}</p>
        </label>
      )}

      <div>
        {edit.id ? (
          <div></div>
        ) : (
          <div className="dropdown-container" tabIndex="-1">
            <div className="three-dots"></div>
            <div className="dropdown">
              <div
                className="d-text"
                onClick={() => {
                  setEdit({ id: elem.id, title: elem.title });
                }}
              >
                Edit
              </div>

              <div
                className="d-text del"
                onClick={() => {
                  delList(elem.id);
                }}
              >
                Delete
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoCards;
