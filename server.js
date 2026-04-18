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

  // Where does this route receive the id value?
  // What should the response look like when the todo exists?
  // What should the response look like when it does not?
});

app.post("/todos", (request, response) => {
  const { task } = request.body;

  // Where does the new task text come from?
  // What should happen if it is missing?
  // What fields should the new todo object include before you send it back?
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
