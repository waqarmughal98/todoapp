import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./main.scss";

function App() {
  const [list, setList] = useState([]);

  const addList = (todo) => {
    const newTodos = [todo, ...list];

    setList(newTodos);
  };

  const updateList = (id, title) => {
    setList((prev) => prev.map((elem) => (elem.id === id ? title : elem)));
  };

  const delList = (ind) => {
    const deleteList = list.filter((elem) => {
      return ind !== elem.id;
    });

    console.log(deleteList);
    setList(deleteList);
  };

  const completeList = (id) => {
    const updateList = list.map((elem) => {
      if (id === elem.id) {
        console.log(elem);
        elem.completed = !elem.completed;
      }
      return elem;
    });

    setList(updateList);
  };

  return (
    <div className="main">
      <div className="todo-bg">
        <div className="inner-todo">
          <div className="progress-tab">
            <h1>Progress</h1>
            <p>Completed</p>
          </div>

          <div className="todo-head">
            <h1>Tasks</h1>
            <select name="filter" id="filter">
              <option value="All">All</option>
            </select>
          </div>

          <div className="task-list">
            <Todo
              delList={delList}
              completList={completeList}
              list={list}
              updateList={updateList}
            />
            <TodoForm onSubmit={addList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
