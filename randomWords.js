const words = ["lantern", "glacier", "velvet", "compass", "thunder", "marble", "eagle", "horizon", "anchor", "whisper"];
function generateRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex]
  document.getElementById("wordDisplay").innerText = randomWord;
}
