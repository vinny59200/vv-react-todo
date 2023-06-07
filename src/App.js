import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleTodoClick = (index) => {
    const updatedTodos = [...todos];
    console.log(index)
    console.log(updatedTodos[index])
    console.log(typeof updatedTodos[index])
    if (typeof updatedTodos[index] == "string") {
      updatedTodos[index] = <s>{updatedTodos[index]}</s>;
    } else {
      updatedTodos[index] = updatedTodos[index].props.children;
    }

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => handleTodoClick(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
