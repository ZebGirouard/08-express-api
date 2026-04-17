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

  if (!text) {
    response.status(400).json({ error: "text is required" });
    return;
  }

  const newIdea = {
    id: ideas.length + 1,
    text
  };

  ideas.push(newIdea);
  response.status(201).json(newIdea);
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
