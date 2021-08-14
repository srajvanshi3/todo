import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";
function App() {
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <Todo
        // todos={todos}
        // completeTodo={completeTodo}
        // removeTodo={removeTodo}
        // updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
