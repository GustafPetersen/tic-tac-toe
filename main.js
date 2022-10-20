const playerSelect = (player, playerSymbol) => {
  return { player, playerSymbol };
};

let humanPlayer;
let computerPlayer;

const selectPlayerButtons = document.body.querySelectorAll(".players");
selectPlayerButtons.forEach((item) =>
  item.addEventListener("click", (e) => {
    humanPlayer = playerSelect(item.id, "humanplayer");
    if (humanPlayer.player === "X") {
      computerPlayer = playerSelect(
        selectPlayerButtons[1].id,
        "computerplayer"
      );
    } else {
      computerPlayer = playerSelect(
        selectPlayerButtons[0].id,
        "computerplayer"
      );
    }
    console.log(humanPlayer);
    console.log(computerPlayer);
    return humanPlayer, computerPlayer;
  })
);

// module for game logic array
const gameArray = (() => {
  let sequenceArray = [];
  const gameSequence = (player, symbol, dataValue) => {
    let obj = { player, symbol, dataValue };
    return gameArray.sequenceArray.push(obj);
  };
  return { gameSequence, sequenceArray };
})();

const duplicateCheck = (() => {
  const checker = (item) => {
    let doubleSelectionCheck = gameArray.sequenceArray.filter((arrItem) =>
      arrItem.dataValue.includes(item.getAttribute("data-value"))
    );
    if (doubleSelectionCheck.length >= 1) {
      console.log(
        `The ${item.getAttribute("data-value")} square has already been chosen`
      );
      return true;
    } else {
      console.log(
        `The ${item.getAttribute("data-value")} square has not been chosen`
      );
      return false;
    }
  };
  return { checker };
})();

// -------------------------------* APPEND ICONS *-------------------------------
// Rewrite as a factory function
//
const addIconToBox = ((item) => {
  const addXicon = (item) => {
    // Code that adds the X icon to the box
    const imgOne = document.createElement("img");
    imgOne.src = "icons/x.png";
    imgOne.className = "imgOne";
    item.appendChild(imgOne);
  };
  const addOicon = (item) => {
    // Code that adds the O icon to the box
    const imgTwo = document.createElement("img");
    imgTwo.src = "icons/o.png";
    imgTwo.className = "imgTwo";
    item.appendChild(imgTwo);
  };
  return {
    addXicon,
    addOicon,
  };
})();

// ----------------------------------* DECIDE TURN *----------------------------------
const playerTurn = ((item) => {
  let whichRound = 1;
  const decideTurn = (() => {
    const optionOne = (item) => {
      return (
        (playerTurn.whichRound += 1),
        console.log(`The round is now no: ${playerTurn.whichRound}`),
        addIconToBox.addXicon(item)
      );
    };
    const optionTwo = (item) => {
      return (
        (playerTurn.whichRound += 1),
        console.log(`The round is now no: ${playerTurn.whichRound}`),
        addIconToBox.addOicon(item)
      );
    };
    return {
      optionOne,
      optionTwo,
    };
  })();

  return {
    decideTurn,
    whichRound,
  };
})();

// -------------------------------* GAME ENGINE *-------------------------------

//       /*
//       Diagonal 1,5,9 && 3,5,7
//       Row 1,2,3 && 4,5,6 && 7,8,9
//       Column 1,4,7 && 2,5,8 && 3,6,9
//       */

const log = (msg, varInput) => {
  console.log(msg, JSON.stringify(varInput));
};

const logJustVar = (msg) => {
  console.log(JSON.stringify(msg));
};

const gameStatus = (() => {
  const filterSymbol = () => {
    const symbXSelect = gameArray.sequenceArray.filter((i) => {
      return i.symbol === "X";
    });
    // log("The list of objects in symbXSelect array: ", symbXSelect)
    const symbOSelect = gameArray.sequenceArray.filter((i) => {
      return i.symbol === "O";
    });
    // log("The list of objects in symbXSelect array: ", symbOSelect)
    const symbOArr = symbOSelect.map((oObject) => {
      return oObject.dataValue;
    });
    const symbXArr = symbXSelect.map((xObject) => {
      return xObject.dataValue;
    });
    // log SymbOSelect
    // log(`The positions of the O symbols are: `, symbOArr);
    // log SymbXSelect
    // log(`The positions of the X symbols are: `, symbXArr)
    return { symbOArr, symbXArr };
  };
  const checkDiag = () => {
    const diagOneX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "1" || "5" || "9";
    });
    const diagTwoX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "3" || "5" || "7";
    });
    const diagOneO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "1" || "5" || "7";
    });
    const diagTwoO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "3" || "5" || "9";
    });
    //log(diagOneX, diagTwoX, diagOneO, diagTwoO)

    return { diagOneX, diagTwoX, diagOneO, diagTwoO };
    // if ()
  };
  const checkHor = () => {
    const horOneX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "1" || "2" || "3";
    });
    const horTwoX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "4" || "5" || "6";
    });
    const horThreeX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "7" || "8" || "9";
    });
    const horOneO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "1" || "2" || "3";
    });
    const horTwoO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "4" || "5" || "6";
    });
    const horThreeO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "7" || "8" || "9";
    });
    return { horOneO, horTwoO, horThreeO, horOneX, horTwoX, horThreeX };
  };
  const checkVer = () => {
    const verOneX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "1" || "4" || "7";
    });
    const verTwoX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "2" || "5" || "8";
    });
    const verThreeX = gameStatus.filterSymbol().symbXArr.filter((item) => {
      return item === "3" || "6" || "9";
    });
    const verOneO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "1" || "4" || "7";
    });
    const verTwoO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "2" || "5" || "8";
    });
    const verThreeO = gameStatus.filterSymbol().symbOArr.filter((item) => {
      return item === "3" || "6" || "9";
    });
    return { verOneO, verTwoO, verThreeO, verOneX, verTwoX, verThreeX };
  };

  const whoWon = () => {
    const playerOWon = [
      gameStatus.checkDiag().diagOneO,
      gameStatus.checkDiag().diagTwoO,
      gameStatus.checkHor().horOneO,
      gameStatus.checkHor().horTwoO,
      gameStatus.checkHor().horThreeO,
      gameStatus.checkVer().verOneO,
      gameStatus.checkVer().verTwoO,
      gameStatus.checkVer().verThreeO,
    ];
    const playerXWon = [
      gameStatus.checkDiag().diagOneX,
      gameStatus.checkDiag().diagTwoX,
      gameStatus.checkHor().horOneX,
      gameStatus.checkHor().horTwoX,
      gameStatus.checkHor().horThreeX,
      gameStatus.checkVer().verOneX,
      gameStatus.checkVer().verTwoX,
      gameStatus.checkVer().verThreeX,
    ];

    // if (playerOWon.find((item) => item >= 3)) {
    //   console.log("Player O Won the game! Congrats!");
    // } else if (playerXWon.find((item) => item >= 3)) {
    //   console.log("Player X Won the game! Congrats!");
    // }
    return { playerOWon, playerXWon }
  };
  return { filterSymbol, checkDiag, checkHor, checkVer, whoWon};
})();

// gameArray.sequenceArray.filter(item => {
//   return item.dataValue === "1" && item.symbol === "X" || "5" && item.symbol === "X" || "9" && item.symbol === "X"})

// AND LAST

// -------------------------------* GAME INTERACTION *-------------------------------
// eventlistener, when a square is clicked, it will be populated by an X or O icon.
const squareSelector = document.body.querySelectorAll(".player-square");
// console.log(squareSelector);

const gameInitFunc = () => {
  // to be fixed.
};

squareSelector.forEach((item) =>
  item.addEventListener("click", (e) => {
    // if statement to determine which round and thus which players turn.
    // if uneven,  then X will play, and even rounds O will play.
    // console.log(`It's round no: ${playerTurn.whichRound}`);
    let checkToPlay = playerTurn.whichRound <= 9;
    let checkTurn = playerTurn.whichRound % 2 === 0;
    if (checkToPlay) {
      if (!duplicateCheck.checker(item)) {
        if (!checkTurn) {
          playerTurn.decideTurn.optionOne(item);
          console.log(
            humanPlayer.playerSymbol,
            humanPlayer.player,
            item.getAttribute("data-value")
          );
          gameArray.gameSequence(
            humanPlayer.playerSymbol,
            humanPlayer.player,
            item.getAttribute("data-value")
          );
          // console.log(
          //   `Function returns: ${playerTurn.decideTurn} and marks an X.`
          // );
        } else if (checkTurn) {
          playerTurn.decideTurn.optionTwo(item);
          gameArray.gameSequence(
            computerPlayer.playerSymbol,
            computerPlayer.player,
            item.getAttribute("data-value")
          );
        } else {
          console.log(
            "The box has been selected before ... it is getting: " +
              duplicateCheck.checker(item)
          );
        }
      } else {
        console.log(`The box data value is: ${item.getAttribute("data-value")}, 
        and the values for the items in the array are: ${gameArray.sequenceArray.filter(
          (arrItem) => arrItem.dataValue
        )}`);
      }
    } else {
      console.log("Game Over");
      // gameEngine.gameOver();
    }
    gameStatus.filterSymbol();
    gameStatus.whoWon();
  })
);
