import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const todos = [
  { id: 1, task: "Set up the Express server", done: true },
  { id: 2, task: "Finish the POST /todos route", done: false }
];

app.get("/todos", (request, response) => {
  response.json(todos);
});

app.get("/todos/:id", (request, response) => {
  const todoId = Number(request.params.id);
  const todo = todos.find((entry) => entry.id === todoId);

  if (!todo) {
    response.status(404).json({ error: "todo not found" });
    return;
  }

  response.json(todo);
});

app.post("/todos", (request, response) => {
  const { task } = request.body;

  if (!task) {
    response.status(400).json({ error: "task is required" });
    return;
  }

  const newTodo = {
    id: todos.length + 1,
    task,
    done: false
  };

  todos.push(newTodo);
  response.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
