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

  // Find the matching todo by id.
  // Return it as JSON when found.
  // Return a 404 JSON error when it does not exist.
});

app.post("/todos", (request, response) => {
  const { task } = request.body;

  // If task is missing, return a 400 error.
  // Otherwise create a new todo object and return it with status 201.
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
