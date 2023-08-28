let currentPlayer = "X";
let boxes = document.getElementsByClassName("box");
let arrayData = Array(9).fill("");

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    let boxtext = box.querySelector(".boxtext");

    box.addEventListener('click', function () {
        if (boxtext.innerText === '') {
            boxtext.innerText = currentPlayer;
            arrayData[i] = currentPlayer;
            console.log(arrayData);
            if (Win(currentPlayer)) {
                alert(currentPlayer + " wins!");
                resetGame();
            } else if (!arrayData.includes("")) {
                alert("It's a draw!");
                resetGame();
            } else {
                currentPlayer = switchPlayer(currentPlayer);
            }
        }
    });
}
function Win(currentPlayer) {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]            
    ];
    return winCombos.some(combo => 
        combo.every(index => arrayData[index] === currentPlayer)
    );
}
function switchPlayer(currentPlayer) {
    if (currentPlayer === "X") {
        return "O"; 
    } else {
        return "X";
    }
}
function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
        let boxtext = boxes[i].querySelector(".boxtext");
        boxtext.innerText = "";
        arrayData[i] = "";
    }
    currentPlayer = "X";
}