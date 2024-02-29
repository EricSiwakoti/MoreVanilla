const input = document.querySelector("#search-input");
const speechBtnDiv = document.querySelector("#speech-btn");
const speakerBtn = document.querySelector(".btn .fas");

const speechSynthesis = window.speechSynthesis;

if (speechSynthesis) {
  console.log("Speech Synthesis Supported");

  speakerBtn.addEventListener("click", speak);

  function speak(e) {
    e.preventDefault();
    const inputValue = input.value;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = inputValue;
    speech.volume = "1";
    speech.rate = "1";
    speech.pitch = "1";
    speech.voice = speechSynthesis.speak(speech);
  }
} else {
  console.log("Speech Synthesis Not Supported");
  speechBtnDiv.style.visibility = "hidden";
}
