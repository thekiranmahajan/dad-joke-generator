const jokeElement = document.getElementById("joke");
const btn = document.querySelector(".btn");
const jokeWrapper = document.getElementById("jokeWrapper");
const loader = document.getElementById("loader");
const api = "238YFDFM830qHpo7wMJT9Q==5P90c45LkLGt2m4U";
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": api,
  },
};

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.innerHTML = "I'm disabled";
  loader.style.display = "block";
  jokeWrapper.style.display = "none";

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    jokeElement.innerHTML = data[0].joke;
    loader.style.display = "none";
    jokeWrapper.style.display = "block";
    jokeWrapper.style.display = "flex";
    btn.disabled = false;
    btn.innerHTML = "Next Dad Joke";
  } catch (error) {
    loader.style.display = "none";
    jokeElement.innerHTML = "Something went wrong. Please try again";
    jokeWrapper.style.display = "block";
    jokeWrapper.style.display = "flex";
    btn.disabled = false;
  }
});
