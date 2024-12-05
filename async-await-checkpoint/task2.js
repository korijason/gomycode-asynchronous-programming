// Task 02: Awaiting a Call
/**
 * Simulates fetching data from an API.
 * Uses await to handle the asynchronous nature of the API call.
 */
async function awaitCall() {
  try {
    // Simulate an API call
    const data = await fakeApiCall(); 
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

/**
 * Simulates an API call with a delay using a Promise.
 * @returns {Promise<string>} A promise that resolves with a fake API response.
 */
function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a success scenario, returning the fetched data
      resolve("Fetched data from API");
      
    }, 2000); // Simulate 2 seconds delay
  });
}

// Call the awaitCall function to see it in action
awaitCall();
