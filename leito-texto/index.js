const main = document.querySelector("main");
const buttonInsertText = document.querySelector(".btn-toggle");
const modalShow = document.querySelector(".text-box");
const modalClose = document.querySelector(".close");
const selectElement = document.querySelector("select");

const humanExpression = [
  {
    img: "./img/angry.jpg",
    text: "Estou com raiva",
  },
  {
    img: "./img/drink.jpg",
    text: "Estou com sede",
  },
  {
    img: "./img/food.jpg",
    text: "Estou com fome",
  },
  {
    img: "./img/grandma.jpg",
    text: "Quero ver a vovó",
  },
  {
    img: "./img/happy.jpg",
    text: "Estou feliz",
  },
  {
    img: "./img/home.jpg",
    text: "Quero ir para casa",
  },
  {
    img: "./img/hurt.jpg",
    text: "Estou machucado",
  },
  {
    img: "./img/outside.jpg",
    text: "Quero ir lá fora",
  },
  {
    img: "./img/sad.jpg",
    text: "Estou triste",
  },
  {
    img: "./img/scared.jpg",
    text: "Estou assustado",
  },
  {
    img: "./img/school.jpg",
    text: "Quero ir para a escola",
  },
  {
    img: "./img/tired.jpg",
    text: "Estou cansado",
  },
];
// utterance e um obj que reprecenta um pedido de fala/leitura e contem informações sobre o que deve ser lido, como dever lido e qual linguem deve ser lida
const utterance = new SpeechSynthesisUtterance();
const setTextMessage = (text) => {
  utterance.text = text;
};
const speakText = () => {
  speechSynthesis.speak(utterance);
};

const setVoice = (event) => {
  //   console.log("test");
  utterance.voice = voices.find((voice) => voice.name === event.target.value);
};

const createExpressionBox = ({ img, text }) => {
  const div = document.createElement("div");
  div.classList.add("expression-box");

  div.innerHTML = `
   <img src="${img} " alt="${text}"/>
   <p class="info">${text}</p>
  `;
  div.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    div.classList.add("active");
    setTimeout(() => {
      div.classList.remove("active");
    }, 1000);
  });
  main.appendChild(div);
};

humanExpression.forEach(createExpressionBox);

let voices = [];

// speechSynthesis é a interface controladora para o serviço de fala.
// executar uma func quando alista de voz mudar
speechSynthesis.addEventListener("voiceschanged", () => {
  voices = speechSynthesis.getVoices();
  // executando uma func para cada elemento do array
  voices.forEach(({ name, lang }) => {
    const option = document.createElement("option");

    //passando um valor para option
    option.value = name;

    //fazendo uma interpolação da lang e do name
    option.textContent = `${lang} | ${name}`;

    //dependendo do browser ou sistema operacional essa vozes podem variar
    selectElement.appendChild(option);
    console.log(option);
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
