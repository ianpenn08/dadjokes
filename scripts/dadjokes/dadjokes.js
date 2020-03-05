const DadJokes = (dadJokesObject) => {
    return `
    <section class="flex" >
        <h4 class="number">${dadJokesObject.id}</h4>
        <ul class="flex2">
            <li>Question: ${dadJokesObject.question}</li>
            <li>Answer: ${dadJokesObject.answer}</li>
            
        </ul>
    </section>
     `

}

export default DadJokes