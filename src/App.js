import { useEffect, useState } from "react";
import "./App.css";
import "./main.scss";
import "./todo.scss";
import TodoForm from "./components/TodoForm";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import TodoCards from "./components/cards/TodoCards";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  const [count, setcount] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [percent, setPercent] = useState([]);
  var i = 0;
  var percentage = 0;

  useEffect(() => {
    axios({
      method: "get",
      url: "/todos",
    }).then(function (response) {
      console.log(response);
    });
  }, []);

  useEffect(() => {
    setTotalLength(list.length);

    list.map((e) => {
      return e.completed ? i++ : i;
    });

    setcount(i);

    percentage = (i / totalLength) * 100;

    setPercent(parseInt(percentage));
  }, [list]);

  const setupList = (data) => {
    setList(data);
  };

  const addList = (todo) => {
    const newTodos = [todo, ...list];
    setList(newTodos);
  };

  return (
    <div className="main">
      <div className="todo-bg">
        <div className="inner-todo">
          <div className="progress-tab">
            <h1>Progress</h1>

            <Progress
              percent={percent}
              className="progressbar"
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
            <select className="select-box" name="filter" id="filter">
              <option value="All">All</option>
            </select>
          </div>

          <div className="task-list">
            <div className="todos">
              {list.map((elem, index) => {
                return (
                  <TodoCards
                    key={index}
                    id={index}
                    elem={elem}
                    setupList={setupList}
                    list={list}
                  />
                );
              })}
            </div>

            <TodoForm onSubmit={addList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// export { Functional };
