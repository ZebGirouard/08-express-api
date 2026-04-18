# 08 Express API

## Goal
Build a small TODO API with Express so you can inspect request and response flow from the server side.

## What You Are Practicing
- What an Express route does
- The difference between `request.params` and `request.body`
- How JSON responses and status codes work
- How the server decides between success and error cases

## Start Here
1. Run `npm install`.
2. Run `npm run dev`.
3. Open `server.js`.
4. Finish `GET /todos/:id` so it can find one todo from the URL.
5. Finish `POST /todos` so it can create one new todo from JSON you send in the request body.

The data stays in memory so you can focus on routes, params, and JSON responses instead of infrastructure.

## Stretch Goals
- Add a `DELETE /todos/:id` route.
- Validate empty input.
- Save the data to a JSON file.
