import React from "react";

function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
  filteredTodos,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText === "") {
      return false;
    }

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.text);
  };

  const clearHandler = () => {
    setTodos(
      todos.filter((todo) => {
        return !todo.completed;
      })
    );
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={submitTodoHandler}>
          <input
            onChange={inputTextHandler}
            className="new-todo"
            placeholder="What needs to be done?"
            value={inputText}
            autoFocus
          />
        </form>
      </header>

      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{filteredTodos.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              href={() => false}
              onClick={statusHandler}
              className={`${status === "All" ? "selected" : "hover"}`}
              // className="selected"
            >
              All
            </a>
          </li>
          <li>
            <a
              href={() => false}
              onClick={statusHandler}
              className={`${status === "Active" ? "selected" : "hover"}`}
              // className="selected"
            >
              Active
            </a>
          </li>
          <li>
            <a
              href={() => false}
              onClick={statusHandler}
              className={`${status === "Completed" ? "selected" : "hover"}`}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          hidden={
            todos.filter((todo) => {
              return todo.completed;
            }).length === 0
          }
          onClick={clearHandler}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Form;
