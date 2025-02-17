/* const result = confirm("Are you sure?");
console.log(result); //(ctrl+k+c) for single-line
(shift+alt+a) for multi-line
 */

// change modes
/* let modeBtn = document.querySelector("#mode");

modeBtn.addEventListener("click", () => {
  if (modeBtn.innerText === "Dark") {
    modeBtn.innerText = "Light";
    document.querySelector("body").style.backgroundColor = "gray";
  } else if (modeBtn.innerText === "Light") {
    modeBtn.innerText = "Dark";
    document.querySelector("body").style.backgroundColor = "#c3dbd3";
  }
}); */

let turnO = true;

let turn0 = document.querySelector("#turnO");
turn0.style.backgroundColor = "#baa2aa";
let turnX = document.querySelector("#turnX");

let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let boxes = document.querySelectorAll(".box");

let msgBox = document.querySelector(".msg");

let msgGame = document.querySelector(".game");
msgGame.style.textAlign = "center";

let scorePlayerO = document.querySelector("#playerO");
let scorePlayerX = document.querySelector("#playerX");

let count = 0;

let scoreO = 0;
let scoreX = 0;
scorePlayerO.innerText = `${scoreO}`;
scorePlayerX.innerText = `${scoreX}`;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (count === 9) {
      msgBox.innerText = "Draw, Try again";
      msgGame.classList.add("hide");
      msgBox.classList.remove("hide");
    }
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
      turn0.style.backgroundColor = "transparent";
      turnX.style.backgroundColor = "#baa2aa";
    } else if (turnO === false) {
      box.innerText = "X";
      turnO = true;
      turn0.style.backgroundColor = "#baa2aa";
      turnX.style.backgroundColor = "transparent";
    }
    box.disabled = true;
    checkWinner();
    if (box.innerText === "O") {
      box.style.color = "black";
    } else if (box.innerText === "X") {
      box.style.color = "white";
    }
  });
});

let checkWinner = () => {
  for (pattern of winningPatterns) {
    if (
      boxes[pattern[0]].innerText != "" &&
      boxes[pattern[1]].innerText != "" &&
      boxes[pattern[2]].innerText != ""
    ) {
      if (
        boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
        boxes[pattern[1]].innerText === boxes[pattern[2]].innerText
      ) {
        showWinner(boxes[pattern[0]].innerText);
        return true;
      }
    }
  }
};

let showWinner = (winner) => {
  msgBox.innerText = `Congratulations, winner is player${winner}`;
  msgGame.classList.add("hide");
  msgBox.classList.remove("hide");
  if (winner === "O") {
    scoreO++;
    scorePlayerO.innerText = `${scoreO}`;
    msgBox.style.color = "black";
  } else if (winner === "X") {
    scoreX++;
    scorePlayerX.innerText = `${scoreX}`;
    msgBox.style.color = "white";
  }
  console.log(scoreO, scoreX);
};

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  turnO = true;
  msgBox.classList.add("hide");
  msgGame.classList.remove("hide");
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    count = 0;
  });
});
