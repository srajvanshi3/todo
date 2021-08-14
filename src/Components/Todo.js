import React, { useState } from "react";
import { useSelector } from "react-redux";

const Todo = () => {
  const todo = useSelector((state) => state);
  console.log("todo", todo.allTasks.tasks);
  const todos = todo.allTasks.tasks;
  

  return todos.map((todo, index) => (
    <div className={"todo-row"} key={index}>
      <div >{todo}</div>
    </div>
  ));
};

export default Todo;
