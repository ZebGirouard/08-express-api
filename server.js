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
  const matchingTodo = todos.find((todo) => todo.id === todoId);

  // Where does this route receive the id value?
  // What should happen first if `matchingTodo` is missing?
  // What JSON should you send back when it exists?
});

app.post("/todos", (request, response) => {
  const { task } = request.body;

  // Where does the new task text come from?
  // What should happen first if it is missing?
  // Which fields should the new todo object include before you return it?
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
