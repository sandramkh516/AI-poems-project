function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#instructions");
  let apiKey = "2cf310d7ae5ba0tbo139ab4b634a8bf3";
  let context = `You are an expert in classical Persian poetry.The user will enter a single Persian word.Choose ONE well-known Iranian poet (such as Hafez, Saadi, Rumi, Ferdowsi, or Khayyam).Generate exactly FOUR complete Persian verses (beyts) from that
  poet that contain the given word explicitly and naturally.

Rules:
 The verses must be in Persian (Farsi). All four verses must include the exact given word.
 Verses should be authentic in style and language of the selected poet.Seperate each line with a <br/>
  Do NOT explain anything.
 Do NOT add titles, translations, or extra text.
 Output only the four verses, each on a separate line.`;

  let prompt = `user instructions:generate a persian poem about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
