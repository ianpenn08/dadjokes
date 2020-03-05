import { usedadJokes } from "./dadjokesDataProvider.js";
import DadJokes from "./dadjokes.js";

const contentTarget = document.querySelector(".container")

const dadJokesList = () => {
    // Get the data from the provider
    const dadJokesObjectsArray = usedadJokes()

    // Iterate the array
    for (const dadJokesObject of dadJokesObjectsArray) {
        // Convert each object to HTML representation
        const dadJokesHTMLRepresentation = DadJokes(dadJokesObject)
        // Put HTML in DOM
        contentTarget.innerHTML += dadJokesHTMLRepresentation

    }

}

export default dadJokesList