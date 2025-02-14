//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

	
  output.innerHTML = `<tr id ="loading" ><td colspan="2">Loading...</td></tr>`;

  function createPromise(index) {
    return new Promise((resolve) => {
      const timeTaken = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
      setTimeout(() => resolve({ index, timeTaken }), timeTaken * 1000);
    });
  }

  // Create 3 promises
  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  // Wait for all promises to resolve
  Promise.all(promises).then((results) => {
    // Remove loading message
    output.innerHTML = "";

    // Append resolved promise times to table
    results.forEach(({ index, timeTaken }) => {
      const row = `<tr><td>Promise ${index}</td><td>${timeTaken}</td></tr>`;
      output.innerHTML += row;
    });

    // Calculate total time taken (max time among all promises)
    const totalTime = Math.max(...results.map((r) => parseFloat(r.timeTaken))).toFixed(3);
    output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;
  });
});
