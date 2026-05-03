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

boardgamesService.updateGame = (id, name, minP, maxP, aveDuration, purchaseDate, status) => {
    const index = boardgames.findIndex(game => game.id === parseInt(id));

    if (index !== -1) {
        // Creamos el objeto actualizado manteniendo el ID original
        boardgames[index] = {
            id: boardgames[index].id,
            name: name || boardgames[index].name,
            minP: minP || boardgames[index].minP,
            maxP: maxP || boardgames[index].maxP,
            aveDuration: aveDuration || boardgames[index].aveDuration,
            purchaseDate: purchaseDate || boardgames[index].purchaseDate,
            status: status || boardgames[index].status
        };
        return boardgames[index];
    }
    return null;
};

boardgamesService.deleteGame = (id) => {
    const index = boardgames.findIndex(game => game.id === parseInt(id));
    if (index !== -1){
        const deletedGame = boardgames.splice(index, 1);
        countid--;
        return deletedGame[0];
        
    }
    return null;
};

export default boardgamesService