import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./main.scss";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function App() {
  const [list, setList] = useState([]);

  const [percent, setPercent] = useState([]);

  const [count, setcount] = useState([]);

  let totalLength = "";

  var i = 0;
  var percentage = 0;

  useEffect(() => {
    totalLength = list.length;

    list.map((e) => {
      return e.completed ? i++ : i;
    });

    setcount(i);

    percentage = (i / totalLength) * 100;
    percentage = parseInt(percentage);
    setPercent(percentage);
  }, [list]);

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
    <div className="main">
      <div className="todo-bg">
        <div className="inner-todo">
          <div className="progress-tab">
            <h1>Progress</h1>
            <Progress
              percent={percent}
              theme={{
                success: {
                  color: "#3B3B3B",
                },
              }}
            />
            <p>{count} Completed</p>
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
