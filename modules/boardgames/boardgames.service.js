const boardgamesService ={};

let boardgames = [];
let countid = 1;

boardgamesService.getGames = () =>{
    return boardgames;
};

boardgamesService.getGame = (id) =>{
    return boardgames.find(game=> game.id === parseInt(id));
};

boardgamesService.addGame = (name, minP, maxP, aveDuration, purchaseDate,status) => {
    const newGame = {
        name: name,
        id: countid,
        minP: minP,
        maxP: maxP,
        aveDuration: aveDuration,
        purchaseDate: purchaseDate,
        status: status   
    };
    boardgames.push(newGame);
    countid++;
    return newGame;
};

boardgamesService.updateGame = (id, updateData) => {
    const index = boardgames.findIndex (game => game.id === parseInt(id));
    if (index !== -1){
        boardgames[index] = { ...boardgames[index], ...updateData, id: boardgames[index].id };
        return boardgames[index];
    }
    return null;
};

boardgamesService.deleteGame = (id) => {
    const index = boardgames.findIndex(game => game.id === parseInt(id));
    if (index !== -1){
        const deletedGame = boardgames.splice(index, 1);
    }
    return null;
};

export default boardgamesService