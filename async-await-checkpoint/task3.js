// Task 03: Handling Errors with Async/Await
/**
 * Simulates an API call and gracefully handles any errors.
 * Uses a try-catch block for error handling.
 */
async function handleErrorsInAwaitCall() {
    try {
      const data = await fakeApiCall(true); // Passing true to simulate an error
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data (handled gracefully):", error.message);
    }
  }
  