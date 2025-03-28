let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6]
];
let xTurn = true;
let count = 0;

const disableButtons = () => {
  btnRef.forEach((button) => (button.disabled = true));
  popupRef.classList.remove("hide");
};

const enableButtons = () => {
  btnRef.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
  });
  popupRef.classList.add("hide");
};

const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

const winFunction = (player) => {
  disableButtons();
  msgRef.innerHTML = `${player === 'X' ? 'X' : 'O'} Wins! &#x1F60D;`;
};

const winChecker = () => {
  for (let pattern of winningPattern) {
    let [a, b, c] = [
      btnRef[pattern[0]].innerText,
      btnRef[pattern[1]].innerText,
      btnRef[pattern[2]].innerText
    ];
    if (a && b && c && a === b && b === c) {
      winFunction(a);
      return;
    }
  }
};

btnRef.forEach((button) => {
  button.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      button.innerText = "X";
    } else {
      xTurn = true;
      button.innerText = "O";
    }
    button.disabled = true;
    count++;
    
    if (count === 9) {
      drawFunction();
    } else {
      winChecker();
    }
  });
});

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

restartBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

window.onload = enableButtons;
