const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Almacenamiento en memoria
let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.json({ message: 'API de Tareas - Tarea 3 Git Flow' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});