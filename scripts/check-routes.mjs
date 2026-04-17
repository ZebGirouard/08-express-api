const baseUrl = process.env.BASE_URL || "http://localhost:3001";

async function checkIdeas() {
  const response = await fetch(`${baseUrl}/ideas`);

  if (!response.ok) {
    throw new Error(`GET /ideas failed with status ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("GET /ideas did not return an array");
  }

  console.log("GET /ideas returned an array.");
}

checkIdeas().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
