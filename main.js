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
    console.log(computerPlayer)
    // sconsole.log(computerPlayer)
    return humanPlayer, computerPlayer
}))

// module for game logic array
/*
module functions should be triggered upon interaction by player
When the player has chosen its tile,
the index and the value of the index should be pushed into the array.
Expected behavriour:
Interaction adds up index and value to the array.

*/

const gameArray = ((player, symbol, dataValue) => {
        const gameSequence = () => {
            let sequenceArray = []
            let obj = {player, symbol, dataValue}
            sequenceArray.push(obj)
            return sequenceArray
        }
    return gameSequence.sequenceArray
})();







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
            console.log(humanPlayer.playerSymbol, humanPlayer.player, item.getAttribute('data-value'))
            gameArray(humanPlayer.playerSymbol, humanPlayer.player, item.getAttribute('data-value'))
            console.log(`Function returns: ${playerTurn.decideTurn} and marks an X.`)
        } else if (checkTurn) {
            playerTurn.decideTurn.optionTwo(item)
            gameArray(computerPlayer.playerSymbol, computerPlayer.player, item.getAttribute('data-value'))
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
        
    const endGame = () => {
        // create dialogue box that declares that the game is over
        return null
    } 
    const checkScore = () => {
        // checks the score in an array for each turn.
        // if there are three in a row for either the vertical, horizontal, or diagonal
        // then the game is over.
    }   
    // return gameBoard
    })()
    return startGame
})()