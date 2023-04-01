const jokeText = document.getElementById("jokeText");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", getJoke);

async function getJoke() {
    const apiUrl = "https://official-joke-api.appspot.com/random_joke";
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        jokeText.innerHTML = `${data.setup} <br> ${data.punchline}`;
    } catch (error) {
        jokeText.innerHTML = "Oops, something went wrong. Please try again later.";
    }
}
