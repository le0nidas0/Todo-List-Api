import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:8080/api/task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("PENDING");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Erro ao buscar tarefas: ${response.statusText}`);
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("GET error:", error);
    }
  };

  const addTask = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Título e descrição são obrigatórios!");
      return;
    }
  
    const newTask = { 
      title, 
      description, 
      status,
      createdAt: new Date().toISOString() // Define a data atual
    };
  
    console.log("Enviando tarefa:", newTask); // Debug
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao adicionar tarefa: ${errorText}`);
      }
  
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (error) {
      console.error("POST error:", error);
    }
  };
  
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error(`Erro ao deletar tarefa: ${response.statusText}`);
      }
      fetchTasks();
    } catch (error) {
      console.error("DELETE error:", error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const updatedStatus = currentStatus === "PENDING" ? "COMPLETED" : "PENDING";

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: updatedStatus }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erro ao atualizar status: ${errorText}`);
      }

      fetchTasks();
    } catch (error) {
      console.error("PUT error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">To-Do List</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Título da Tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Descrição da Tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </div>

      <ul className="list-group">
        {tasks.length === 0 ? (
          <li className="list-group-item text-center">Nenhuma tarefa encontrada</li>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.status === "COMPLETED" ? "list-group-item-success" : ""
              }`}
            >
              <span>
                <strong>{task.title}</strong> - {task.description} ({task.status})
              </span>
              <div>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => toggleStatus(task.id, task.status)}
                >
                  Alternar Status
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Deletar
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
