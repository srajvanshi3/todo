import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../Redux/Actions/taskAction";
function TodoForm(props) {
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("todo", todo.allTasks.tasks);
  const todos = todo.allTasks.tasks;
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  
  const addTodo = () => {
    if(input==""){
      return;
    }
    const newTodos = [input, ...todos];
    dispatch(setTasks(newTodos));
    setInput("")
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
       
      />
      <button onClick={addTodo} className="todo-button">
        Add todo
      </button>
    </>
  );
}

export default TodoForm;
