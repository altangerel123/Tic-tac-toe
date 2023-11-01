const boxes = document.querySelectorAll(".row > div");
const modal = document.querySelector(".modal");
const restartBtn = document.querySelector(".restart");
const winnerText = document.querySelector(".winner");

let player = "x";
let winner = null;

const arr = ["", "", "", "", "", "", "", "", ""];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (winner) return;
    if (box.textContent !== "") return;
    box.textContent = player;
    arr[index] = player;
    player = player === "x" ? "o" : "x";
    // if(player === "x") {
    //     player = "o";
    // }else{
    //     player = "x"
    // }
    checkWinner();
  });
});

const checkWinner = () => {
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    winner = arr[0];
  } else if (arr[3] === arr[4] && arr[4] === arr[5]) {
    winner = arr[3];
  } else if (arr[6] === arr[7] && arr[7] === arr[8]) {
    winner = arr[6];
  } else if (arr[0] === arr[3] && arr[3] === arr[6]) {
    winner = arr[0];
  } else if (arr[1] === arr[4] && arr[4] === arr[7]) {
    winner = arr[1];
  } else if (arr[2] === arr[5] && arr[5] === arr[8]) {
    winner = arr[2];
  } else if (arr[0] === arr[4] && arr[4] === arr[8]) {
    winner = arr[0];
  } else if (arr[2] === arr[4] && arr[4] === arr[6]) {
    winner = arr[2];
  } else if (arr.join("").length === 9) {
    winner = "NO ONE";
  }

  if (winner) {
    if (winner === "NO ONE") {
      winnerText.textContent = "Draw";
    } else {
      winnerText.textContent = `${winner} is the winner`;
    }
    modal.style.display = "flex";
  }
};

const reset = () => {
  boxes.forEach((box, index) => {
    box.textContent = "";
    arr[index] = "";
    winner = null;
    player = "x";
    modal.style.display = "none";
  });
};

restartBtn.addEventListener("click", reset);
