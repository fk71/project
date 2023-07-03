
// fetch("https://dad-jokes.p.rapidapi.com/random/joke");

const jokes = document.querySelector("#joke")
const jokeBtn = document.querySelector("#btn")

const generateJokes = () => {
	const setheader = {
		header: {
			Accept : "application/json"
		}
	}
	fetch("https://dad-jokes.p.rapidapi.com/random/joke")
	.then((res) =>console.log(res.json)).catch((error) => console.log(error))

}



jokeBtn.addEventListener("click", generateJokes)
generateJokes()
