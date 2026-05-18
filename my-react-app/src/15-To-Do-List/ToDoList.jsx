import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  function handleAddTask() {
    setTasks((t) => [...t, taskText]);
    setTaskText("");
  }

  function handleDeleteTask(index) {
    setTasks((t) => t.filter((_, i) => index !== i));
  }

  function handleTaskChange(e) {
    setTaskText(e.target.value);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter a Task"
        value={taskText}
        onChange={handleTaskChange}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
