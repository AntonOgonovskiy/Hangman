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
  const quizQuestion = quizQuestions[selectQuestion()];
  console.log(quizQuestion);
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
  secretWord.innerText = Array(quizQuestion.answer.length).fill("__").join(" ");
  const question = document.createElement("p");
  const innerHint = `Hint: ${quizQuestion.question}`;
  question.innerText = innerHint;
  const counter = document.createElement("p");
  counter.setAttribute("id", "counter");
  const innerIncorrAnsw = "Incorrect guesses: 0 / 6";
  counter.innerText = innerIncorrAnsw;
  const keyboard = createKeyboard();
  keyboard.classList.add("keyboard");
  bodyWrapper.classList.add("bodyWrapper");
  gallows.append(gallow);
  quiz.append(secretWord);
  quiz.append(question);
  quiz.append(counter);
  quiz.append(keyboard);
  bodyWrapper.append(gallows);
  bodyWrapper.append(quiz);
  body.append(bodyWrapper);
  localStorage.setItem("id", quizQuestion.id);
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

function vrBtnClick(e) {
  const btn = e.target.closest("p");
  if (btn.classList.contains("inactive")) return false;
  const char = btn.innerText;
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
  btn.classList.add("inactive");
}
const secretWord = document.querySelector(".secretWord");
const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("click", vrBtnClick);
