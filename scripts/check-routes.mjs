const baseUrl = process.env.BASE_URL || "http://localhost:3001";

async function checkTodos() {
  const response = await fetch(`${baseUrl}/todos`);

  if (!response.ok) {
    throw new Error(`GET /todos failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("GET /todos did not return an array");
  }

  const singleResponse = await fetch(`${baseUrl}/todos/1`);

  if (!singleResponse.ok) {
    throw new Error(`GET /todos/1 failed with status ${singleResponse.status}`);
  }

  const createdResponse = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: "Write one route test" })
  });

  if (createdResponse.status !== 201) {
    throw new Error(`POST /todos failed with status ${createdResponse.status}`);
  }

  console.log("TODO API checks passed.");
}

checkTodos().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
