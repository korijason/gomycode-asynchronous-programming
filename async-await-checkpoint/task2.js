// Task 02: Awaiting a Call
/**
 * Simulates fetching data from an API.
 * Uses await to handle the asynchronous nature of the API call.
 */
async function awaitCall() {
    try {
      const data = await fakeApiCall(); // Simulating API call
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  