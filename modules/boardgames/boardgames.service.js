const boardgamesService ={};

let boardgames = [];
let countid = 1;

boardgamesService.getGames = () =>{
    return boardgames;
};

boardgamesService.getGame = (id) =>{
    return boardgames.find(game=> game.id === parseInt(id));
};

boardgamesService.addGame = (gameData) => {
    const newGame={
        name: gameData.name,
        id: countid,
        minP: gameData.minP,
        maxP: gameData.maxP,
        aveDuration: gameData.aveDuration,
        purchaseDate: gameData.purchaseDate,
        status: gameData.status   
    };
    boardgames.push(newGame);
    countid++;
    return newGame;
};

