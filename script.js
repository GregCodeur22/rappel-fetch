let question = document.querySelector(".header");
let response = document.querySelector(".footer");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);
      question.textContent = joke.text_head;
      response.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}
getJoke();

document.body.addEventListener("click", getJoke);
