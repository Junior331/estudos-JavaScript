const modalClose = document.querySelector(".close");
const textArea = document.querySelector("textarea");
const modalShow = document.querySelector(".text-box");
const selectElement = document.querySelector("select");
const buttonReadText = document.querySelector("#read");
const buttonInsertText = document.querySelector(".btn-toggle");

// utterance e um obj que reprecenta um pedido de fala/leitura e contem informações sobre o que deve ser lido, como dever lido e qual linguem deve ser lida
const utterance = new SpeechSynthesisUtterance();
const setTextMessage = (text) => {
  utterance.text = text;
};
const speakText = () => {
  speechSynthesis.speak(utterance);
};

const setVoice = (event) => {
  const selectedVoice = voices.find(
    (voice) => voice.name === event.target.value
  );
  utterance.voice = selectedVoice;
};

let voices = [];

// speechSynthesis é a interface controladora para o serviço de fala.
// executar uma func quando alista de voz mudar
speechSynthesis.addEventListener("voiceschanged", () => {
  voices = speechSynthesis.getVoices();
  console.log(voices);
  // executando uma func para cada elemento do array
  voices.forEach(({ name, lang }) => {
    const option = document.createElement("option");

    //passando um valor para option
    option.value = name;

    //fazendo uma interpolação da lang e do name
    option.textContent = `${lang} | ${name}`;

    //dependendo do browser ou sistema operacional essa vozes podem variar
    selectElement.appendChild(option);
  });
});

//add evento no button, que esta recebendo como promeiro argumento o seu tipo de evento e uma func com segundo argumento
buttonInsertText.addEventListener("click", () => {
  modalShow.classList.add("show");
});

modalClose.addEventListener("click", () => {
  modalShow.classList.remove("show");
});

//escutando as mudança do select
selectElement.addEventListener("change", setVoice);

buttonReadText.addEventListener("click", () => {
  setTextMessage(textArea.value);
  speakText();
});
