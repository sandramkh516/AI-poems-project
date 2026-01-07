function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "بر خیر و مخور غم جهان گذرا",
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
