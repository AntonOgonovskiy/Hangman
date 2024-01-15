const quizQuestions = [
  {
    id: "0",
    question: "Which famous group was once known as The Quarrymen?",
    answer: "BEATLES",
  },
  {
    id: "1",
    question: "In which city was the Titanic build?",
    answer: "BELFAST",
  },
  {
    id: "2",
    question:
      "Which country between 2006 and 2007 had prime minister and president who were twin brothers?",
    answer: "POLAND",
  },
  {
    id: "3",
    question: "Which Italian artist painted the Birth of Venus?",
    answer: "BOTTICELLI",
  },
  {
    id: "4",
    question:
      "What is the name of the biggest technology company in South Korea?",
    answer: "SAMSUNG",
  },
  {
    id: "5",
    question: "Which metal was discovered by Hans Christian Oersted in 1825?",
    answer: "ALUMINIUM",
  },
  {
    id: "6",
    question:
      "In 1930 Albert Einstein and a colleague were issued US patent 1781541. What was it for?",
    answer: "REFRIGERATOR",
  },
  {
    id: "7",
    question:
      "Daenerys has 3 dragons, two are called Drogon and Rhaegal, what is the other called?",
    answer: "VISERION",
  },
  {
    id: "8",
    question:
      "What was the name of Michael Jackson's autobiography, released in 1988?",
    answer: "MOONWALK",
  },
  {
    id: "9",
    question:
      "May Queen, Wisley Crab, Foxwhelps and Lane's Prince Albert are all species of what?",
    answer: "APPLES",
  },
];
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const body = document.querySelector("body");

createLayout();

function createLayout() {
  const bodyWrapper = document.createElement("div");
  const gallows = document.createElement("div");
  gallows.classList.add("gallows");
  const gallow = document.createElement("img");
  gallow.setAttribute("src", "../files/gallows.png");
  gallow.setAttribute("alt", "gallow");
  const gallowMan = createGallower();
  gallowMan.classList.add("gallowMan");
  gallows.append(gallowMan);
  const quiz = document.createElement("div");
  quiz.classList.add("quiz");
  const secretWord = document.createElement("p");
  secretWord.classList.add("secretWord");
  const question = document.createElement("p");
  question.setAttribute("id", "question");
  const counter = document.createElement("p");
  counter.setAttribute("id", "counter");
  const keyboard = createKeyboard();
  keyboard.classList.add("keyboard");
  bodyWrapper.classList.add("bodyWrapper");
  const popup = createPopup();
  gallows.append(gallow);
  quiz.append(secretWord);
  quiz.append(question);
  quiz.append(counter);
  quiz.append(keyboard);
  bodyWrapper.append(gallows);
  bodyWrapper.append(quiz);
  body.append(bodyWrapper);
  body.append(popup);
  startGame();
}

function createGallower() {
  const gallowMan = document.createElement("div");
  const gallowTop = document.createElement("div");
  const gallowCenter = document.createElement("div");
  const gallowBottom = document.createElement("div");
  const gallowHead = document.createElement("img");
  gallowHead.setAttribute("src", "../files/head.png");
  gallowHead.setAttribute("alt", "head");
  gallowHead.setAttribute("id", "body_0");
  gallowHead.classList.add("gallowPart");
  gallowHead.classList.add("unvise");
  const gallowBody = document.createElement("img");
  gallowBody.setAttribute("src", "../files/body.png");
  gallowBody.setAttribute("alt", "body");
  gallowBody.setAttribute("id", "body_1");
  gallowBody.classList.add("gallowBody");
  gallowBody.classList.add("unvise");
  const gallowLeftHand = document.createElement("img");
  gallowLeftHand.setAttribute("src", "../files/hand-one.png");
  gallowLeftHand.setAttribute("alt", "hand");
  gallowLeftHand.setAttribute("id", "body_2");
  gallowLeftHand.classList.add("gallowPart");
  gallowLeftHand.classList.add("unvise");
  const gallowRightHand = document.createElement("img");
  gallowRightHand.setAttribute("src", "../files/hand-two.png");
  gallowRightHand.setAttribute("alt", "hand");
  gallowRightHand.setAttribute("id", "body_3");
  gallowRightHand.classList.add("gallowPart");
  gallowRightHand.classList.add("unvise");
  const gallowLeftLeg = document.createElement("img");
  gallowLeftLeg.setAttribute("src", "../files/leg-one.png");
  gallowLeftLeg.setAttribute("alt", "leg");
  gallowLeftLeg.setAttribute("id", "body_4");
  gallowLeftLeg.classList.add("gallowPart");
  gallowLeftLeg.classList.add("unvise");
  const gallowRightLeg = document.createElement("img");
  gallowRightLeg.setAttribute("src", "../files/leg-two.png");
  gallowRightLeg.setAttribute("alt", "leg");
  gallowRightLeg.setAttribute("id", "body_5");
  gallowRightLeg.classList.add("gallowPart");
  gallowRightLeg.classList.add("unvise");
  gallowTop.append(gallowHead);
  gallowCenter.append(gallowLeftHand);
  gallowCenter.append(gallowBody);
  gallowCenter.append(gallowRightHand);
  gallowBottom.append(gallowLeftLeg);
  gallowBottom.append(gallowRightLeg);
  gallowMan.append(gallowTop);
  gallowMan.append(gallowCenter);
  gallowMan.append(gallowBottom);
  return gallowMan;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function selectQuestion() {
  const prevNum = +localStorage.getItem("id");
  let currNum = 0;
  again: for (let i = 0; i < 1; ) {
    currNum = getRandomNumber();
    if (currNum === prevNum) {
      continue again;
    } else {
      i++;
    }
  }
  return currNum;
}

function createKeyboardBtn(letter) {
  const btn = document.createElement("p");
  btn.setAttribute("id", letter);
  btn.innerText = letter;
  btn.classList.add("keyboardBtn");
  return btn;
}

function createKeyboard() {
  const keyboard = document.createElement("div");
  letters.forEach((letter) => {
    const btn = createKeyboardBtn(letter);
    keyboard.append(btn);
  });
  return keyboard;
}

function getQuizData() {
  const quizQuestion = quizQuestions[localStorage.getItem("id")];
  return quizQuestion;
}

function btnClick(e) {
  let char = "";
  if (e.type === "click") {
    const btn = e.target.closest("p");
    if (!btn || btn.classList.contains("inactive")) return false;
    char = btn?.innerText;
    btn.classList.add("inactive");
  } else if (e.type === "keydown") {
    char = String(e.key).toUpperCase();
    const btn = document.getElementById(char);
    if (btn.classList.contains("inactive")) return false;
    btn.classList.add("inactive");
  }
  const quizQuestion = getQuizData();
  let word = secretWord.innerText;
  let counter = document.getElementById("counter");
  if (char && quizQuestion.answer.includes(char)) {
    word = word
      .split(" ")
      .map((item, index) => {
        if (quizQuestion.answer[index] === char) {
          return char;
        } else {
          return item;
        }
      })
      .join(" ");
    secretWord.innerText = word;
  } else {
    let number = +counter.innerText[19];
    counterText = counter.innerText
      .split(" ")
      .toSpliced(2, 1, number + 1)
      .join(" ");
    counter.innerHTML = counterText;
    let bodyPart = document.getElementById(`body_${number}`);
    bodyPart.classList.remove("unvise");
  }
  checkGame();
}

function checkGame() {
  let word = secretWord.innerText;
  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  let incorrectAnswers = document
    .getElementById("counter")
    .innerText.substring(18, 20);
  if (+incorrectAnswers === 6) {
    fillPopup("You loose(((", incorrectAnswers);
    popup.classList.add("pop-visibility");
    popupContent.classList.add("pop-open");
    body.classList.add("scroll");
  } else if (!word.includes("__")) {
    fillPopup("You win!!!", incorrectAnswers);
    popup.classList.add("pop-visibility");
    popupContent.classList.add("pop-open");
    body.classList.add("scroll");
  }
}

function createPopup() {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const popupBody = document.createElement("div");
  popupBody.classList.add("popup-body");
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  const popupHeader = document.createElement("p");
  popupHeader.setAttribute("id", "popup_header");
  const popupSecretWord = document.createElement("p");
  popupSecretWord.setAttribute("id", "popup_secret_word");
  const popupIncorrCounter = document.createElement("p");
  popupIncorrCounter.setAttribute("id", "popup_incorrect_answers");
  const restart = document.createElement("button");
  restart.classList.add("menu-button-wrapper");
  restart.innerText = "Try again";
  popupContent.append(popupHeader);
  popupContent.append(popupSecretWord);
  popupContent.append(popupIncorrCounter);
  popupContent.append(restart);
  popupBody.append(popupContent);
  popup.append(popupBody);
  return popup;
}

function fillPopup(text, incorrectAnswers) {
  const secretWord = getQuizData().answer;
  const popupHeader = document.getElementById("popup_header");
  const popupSecretWord = document.getElementById("popup_secret_word");
  const popupIncorrCounter = document.getElementById("popup_incorrect_answers");
  popupHeader.innerText = text;
  popupSecretWord.innerText = `Your secret word was: ${secretWord}`;
  popupIncorrCounter.innerText = `You have ${incorrectAnswers} incorrect answers`;
}

function startGame() {
  const popup = document.querySelector(".popup");
  const quizQuestion = quizQuestions[selectQuestion()];
  const secretWord = document.querySelector(".secretWord");
  const innerHint = `Hint: ${quizQuestion.question}`;
  const innerIncorrAnsw = "Incorrect guesses: 0 / 6";
  const counter = document.getElementById("counter");
  const question = document.getElementById("question");
  if (popup.classList.contains("pop-visibility")) {
    const popupContent = document.querySelector(".popup-content");
    popup.classList.remove("pop-visibility");
    popupContent.classList.remove("pop-open");
    body.classList.remove("scroll");
    const keyboardBtns = document.querySelectorAll(".keyboardBtn");
    const gallowParts = document.querySelectorAll(".gallowPart");
    const gallowBody = document.querySelector(".gallowBody");
    gallowBody.classList.add("unvise");
    keyboardBtns.forEach((item) => item.classList.remove("inactive"));
    gallowParts.forEach((item) => item.classList.add("unvise"));
  }
  secretWord.innerText = Array(quizQuestion.answer.length).fill("__").join(" ");
  counter.innerText = innerIncorrAnsw;
  question.innerText = innerHint;
  localStorage.setItem("id", quizQuestion.id);
}

const secretWord = document.querySelector(".secretWord");
const restartBtn = document.querySelector(".menu-button-wrapper");
const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("click", btnClick);
restartBtn.addEventListener("click", startGame);
document.addEventListener("keydown", btnClick);
