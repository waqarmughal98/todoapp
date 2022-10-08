import { useEffect, useState } from "react";

// Libraries
import { Progress } from "react-sweet-progress";
import axios from "axios";

// StyleSheets
import "react-sweet-progress/lib/style.css";
import "./App.css";
import "./main.scss";
import "./todo.scss";

// Components
import TodoCards from "./components/cards/TodoCards";
import TodoForm from "./components/TodoForm";

function App() {
  // States
  let [count, setcount] = useState(0);
  const [list, setList] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [percent, setPercent] = useState(0);
  var i = 0;

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setList(response.data);
    });

    setTotalLength(list.length);

    list.map((e) => {
      return e.completed ? i++ : i;
    });

    setcount(i);

    setPercent(parseInt((count / totalLength) * 100));
  }, [count, i, list, totalLength]);

  // Callbacks From Child
  const updateListItem = (index, title) => {
    let todoList = list;

    axios
      .put(
        `http://localhost:3000/todos/${index}`,
        {
          id: todoList[index].id,
          title: title,
          completed: false,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        todoList[index].title = title;
        setList(todoList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const todoStatus = (index, status) => {
    let todoList = list;
    axios
      .put(
        `http://localhost:3000/todos/${index}`,
        {
          id: todoList[index].id,
          title: todoList[index].title,
          completed: status,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        todoList[index].completed = status;
        setList(todoList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addList = (todo) => {
    axios
      .post(`http://localhost:3000/todos`, todo, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        const newTodos = [todo, ...list];
        setList(newTodos);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const delList = (index) => {
    axios
      .delete(`http://localhost:3000/todos/${index}`, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(() => {
        const deletList = list.filter((elm) => {
          return index !== elm.id;
        });
        setList(deletList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // On Change Filter
  const filterVal = (e) => {
    return e.target.value;
  };

  return (
    <div className="main">
      <div className="todo">
        {/* Progress */}
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

        {/* Filters */}
        <div className="todo-head">
          <h1>Tasks</h1>
          <select
            className="select-box"
            name="filter"
            id="filter"
            onChange={filterVal}
          >
            <option value="All">All</option>
            <option value="true">Done</option>
            <option value="false">Undone</option>
          </select>
        </div>

        <div className="task-list">
          {/* Tasks list */}
          <div className="todos">
            {list.map((elm, index) => {
              return (
                <TodoCards
                  key={index}
                  index={index}
                  elm={elm}
                  updateListItem={updateListItem}
                  todoStatus={todoStatus}
                  delList={delList}
                />
              );
            })}
          </div>

          {/* Add Task */}
          <TodoForm onSubmit={addList} />
        </div>
      </div>
    </div>
  );
}

export default App;

// export { Functional };
