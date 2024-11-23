// Task 01: Iterating with Async/Await
/**
 * Logs each value from the given array with a delay of 1 second between logs.
 * @param {Array} values - An array of values to iterate and log.
 */
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
      console.log(value);
    }
  }