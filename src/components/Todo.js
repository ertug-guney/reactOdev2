import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    const mapped = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !todo.completed };
      }
      return item;
    });
    setTodos(mapped);
  };
  return (
    <div>
      <li className={`view ${todo.completed ? "completed" : ""}`}>
        <div className="view">
          <input
            onChange={completeHandler}
            className="toggle"
            type="checkbox"
          />
          <label>{text}</label>
          <button onClick={deleteHandler} className="destroy"></button>
        </div>
      </li>
      {/* <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
            </div>
        </li>
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
            </div>
        </li> */}
    </div>
  );
}
