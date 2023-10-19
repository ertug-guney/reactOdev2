import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              text={todo.text}
              todo={todo}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
