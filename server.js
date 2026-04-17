import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const ideas = [
  { id: 1, text: "Build a habit tracker" },
  { id: 2, text: "Build a reading list app" }
];

app.get("/ideas", (request, response) => {
  response.json(ideas);
});

app.post("/ideas", (request, response) => {
  const { text } = request.body;

  // If text is missing, return a 400 error.
  // Otherwise create a new idea object and return it with status 201.
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
