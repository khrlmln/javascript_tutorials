// Define the URL for fetching user information from GitHub API
const url = "https://api.github.com/users/khrlmln";

// Function to fetch user information using async/await
async function getUserInfo() {
  try {
    // Fetch the data from the GitHub API and convert the response to JSON
    const response = await fetch(url);
    const data = await response.json();

    // Log the user data to the console
    console.log(data);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.log(error);
  }
}

// Call the async function to get user info
getUserInfo();

// Fetch user information using Promise-based syntax (with .then and .catch)
fetch(url)
  .then((response) => {
    // Convert the response to JSON format
    return response.json();
  })
  .then((data) => {
    // Log the user data to the console
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch operation
    console.log(error);
  });
