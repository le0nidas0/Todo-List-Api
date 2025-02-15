import React, { useEffect, useState } from "react";
import api from "../services/api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Erro ao buscar tarefas:", error));
  }, []);

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
