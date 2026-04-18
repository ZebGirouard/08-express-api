Start with the inputs for each route.

- `GET /todos/:id` reads the id from `request.params.id`, turns it into a number, finds one matching todo, and then chooses between a success response and a `404`.
- `POST /todos` reads `task` from `request.body`, validates it, builds a new todo object, and sends it back with `201`.
