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

const log = (msg) => {
  console.log(JSON.stringify(msg));
};

const gameStatus = (() => {
  const filterSymbol = () => {
    let symbXSelect = gameArray.sequenceArray.filter((i) => {
      return i.symbol === "X";
    });
    let symbOSelect = gameArray.sequenceArray.filter((i) => {
      return i.symbol === "O";
    });
    const symbOArr = symbOSelect.map((oObject => {
      return oObject.dataValue;
    }));
    const symbXArr = symbXSelect.map(xObject => {
      return xObject.dataValue;
    })
    console.log(
      `The positions of the O symbols are: ${JSON.stringify(symbXSelect)}`
    );
    // log(symbXSelect)
    console.log(`The positions of the X symbols are: `);
    log(symbOSelect);
    return { symbXSelect, symbOSelect, symbOArr, symbXArr };
  };
  // const checkDiagonal = () => {
  //   let diag = gameArray.sequenceArray.filter((i) => {
  //     let iDv = i.dataValue;
  //     // let iS = i.symbol;
  //     return (
  //       iDv === "1" || iDv === "3" || iDv === "5" || iDv === "7" || iDv === "9"
  //     );
  //   });
  //   let iDv = i.dataValue;
  //   let diagOne;
  //   let diagTwo;
  // };
  const checkHorizontal = () => {};
  const checkVertical = () => {};
  return { filterSymbol /*, checkDiagonal, checkHorizontal, checkVertical*/ };
})();

// gameArray.sequenceArray.filter(item => {
//   return item.dataValue === "1" && item.symbol === "X" || "5" && item.symbol === "X" || "9" && item.symbol === "X"})

// AND LAST

// -------------------------------* GAME INTERACTION *-------------------------------
// eventlistener, when a square is clicked, it will be populated by an X or O icon.
const squareSelector = document.body.querySelectorAll(".player-square");
// console.log(squareSelector);

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
          console.log(
            `Function returns: ${playerTurn.decideTurn} and marks an 0.`
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
  })
);
