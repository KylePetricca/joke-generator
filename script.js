// Define an array of jokes, each with a category, setup, and punchline
// main.js

import { jokes } from "./jokes.js";

// The rest of your JavaScript code that uses the `jokes` array

  
  // Get references to the button, paragraph, and form elements
  const generateBtn = document.getElementById("generateBtn");
  const jokeText = document.getElementById("jokeText");
  const addJokeForm = document.getElementById("addJokeForm");
  
  // Add an event listener to the button that generates a random joke
  generateBtn.addEventListener("click", () => {
    // Choose a random joke from the array
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    
    // Build the joke string
    const jokeString = `${randomJoke.category} Joke:\n${randomJoke.setup}\n${randomJoke.punchline}`;
  
    // Display the joke in the paragraph element
    jokeText.textContent = jokeString;
  });
  
  // Add an event listener to the form that adds a new joke to the array
  addJokeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get the input values from the form
    const categoryInput = document.getElementById("categoryInput").value;
    const setupInput = document.getElementById("setupInput").value;
    const punchlineInput = document.getElementById("punchlineInput").value;
    
    // Create a new joke object from the input values
    const newJoke = {
      category: categoryInput,
      setup: setupInput,
      punchline: punchlineInput
    };
    
    // Add the new joke object to the array
    jokes.push(newJoke);
    
    // Reset the form inputs
    addJokeForm.reset();
  });