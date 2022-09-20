const playerSelect = (player, playerSymbol) => {
        return {player, playerSymbol};
}

let humanPlayer;
let computerPlayer;

const selectPlayerButtons = document.body.querySelectorAll(".players")
selectPlayerButtons.forEach(item => item.addEventListener('click', (e) => {
    humanPlayer = playerSelect(item.id, "humanplayer")
    if (humanPlayer.player === "X") {
        computerPlayer = playerSelect(selectPlayerButtons[1].id, "computerplayer")
    } else {
        computerPlayer = playerSelect(selectPlayerButtons[0].id, "computerplayer")
    }
    console.log(humanPlayer)
    // sconsole.log(computerPlayer)
    return humanPlayer, computerPlayer
}))








// -------------------------------* APPEND ICONS *-------------------------------
// Rewrite as a factory function
// 
const addIconToBox = ((item) => {
    
    const addXicon = (item) => {
        // Code that adds the X icon to the box
        const imgOne  = document.createElement("img")
        imgOne.src = "icons/x.png";
        imgOne.className = "imgOne"
        item.appendChild(imgOne);
    }
    const addOicon = (item) => {
        // Code that adds the O icon to the box
        const imgTwo = document.createElement("img")
        imgTwo.src = "icons/o.png"
        imgTwo.className = "imgTwo"
        item.appendChild(imgTwo)
    }
    return {
        addXicon,
        addOicon,
    }
})();

// ----------------------------------* DECIDE TURN *----------------------------------
const playerTurn = ((item) => {
    var whichRound = 1;
    const decideTurn = (() => {
        const optionOne = (item) => {
            return playerTurn.whichRound += 1,
            console.log(`The round is now: ${playerTurn.whichRound}`),
            addIconToBox.addXicon(item);
        }
        const optionTwo = (item) => {
            return playerTurn.whichRound += 1,
            console.log(`The round is now: ${playerTurn.whichRound}`),
            addIconToBox.addOicon(item);
        }
        return {
            optionOne,
            optionTwo,
        }})()
        
    return {
        decideTurn,
        whichRound,
        }
    })();

// -------------------------------* GAME INTERACTION *-------------------------------
// eventlistener, when a square is clicked, it will be populated by an X or O icon.
const squareSelector = document.body.querySelectorAll(".player-square")
// console.log(squareSelector);

squareSelector.forEach(item => item.addEventListener('click', (e) => {
    // if statement to determine which round and thus which players turn.
    // if uneven,  then X will play, and even rounds O will play.
    console.log(`It's the: ${playerTurn.whichRound} round`)
    let checkToPlay = playerTurn.whichRound <= 9;
    let checkTurn = playerTurn.whichRound % 2 === 0;
    if (checkToPlay) {
        console.log(checkTurn)
        if (!checkTurn) {
            playerTurn.decideTurn.optionOne(item)
            console.log(`Function returns: ${playerTurn.decideTurn} and marks an X.`)
        } else if (checkTurn) {
            playerTurn.decideTurn.optionTwo(item)
            console.log(`Function returns: ${playerTurn.decideTurn} and marks an 0.`)
        } else {
            console.log("The function is not getting a boolean properly ... it is getting: " + checkTurn)
        }
    } else {
        console.log("Game Over")
        gameEngine.gameOver()
    }
})
)


// AND LAST

// -------------------------------* AI ENGINE *-------------------------------


// gameEngine.startGame()

// -------------------------------* GAME ENGINE *-------------------------------
const gameEngine = (() => {
    const startGame = (() => {
        let gameBoard = [];
    const endGame = () => {
        // create dialogue box that declares that the game is over
        return null
    } 
    const checkScore = () => {
        // checks the score in an array for each turn.
        // if there are three in a row for either the vertical, horizontal, or diagonal
        // then the game is over.
    }   
    return gameBoard
    })()
    return startGame
})()