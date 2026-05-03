import boardgamesService from './boardgames.service.js';

const boardgamesController = {};

boardgamesController.getGames= (req, res) => {
    const games = boardgamesService.getGames();
    res.status(200).send ({
        games: games
    })
}

boardgamesController.getGame= (req, res) => {
    const idGame = req.params.id;
    const game = boardgamesService.getGame(idGame);
    res.status(200).send ({
        game: game
    })
}

boardgamesController.addGame = (req, res) => {
    const name = req.body.name;
    const minP = req.body.minP;
    const maxP = req.body.maxP;
    const aveDuration = req.body.aveDuration;
    const purchaseDate = req.body.purchaseDate;
    const status = req.body.status;

    // Los enviamos al servicio como argumentos individuales
    const game = boardgamesService.addGame(name, minP, maxP, aveDuration, purchaseDate, status);

    res.status(200).send({
        msg: "Juego agregado exitosamente", 
        game: game
    });
};


boardgamesController.updateGame = (req, res) => {
    const idGame = req.params.id;
 
    const name = req.body.name;
    const minP = req.body.minP;
    const maxP = req.body.maxP;
    const aveDuration = req.body.aveDuration;
    const purchaseDate = req.body.purchaseDate;
    const status = req.body.status;

    const updatedGame = boardgamesService.updateGame(idGame, name, minP, maxP, aveDuration, purchaseDate, status);

    if (updatedGame) {
        res.status(200).send({
            msg: "Juego actualizado exitosamente",
            game: updatedGame
        });
    } else {
        res.status(404).send({
            msg: "No se pudo actualizar, juego no encontrado"
        });
    }
};

boardgamesController.deleteGame = (req, res) => {
    const idGame = req.params.id;
    const deletedGame = boardgamesService.deleteGame(idGame);

    if (deletedGame) {
        res.status(200).send({
            msg: "Juego eliminado exitosamente",
            game: deletedGame
        });
    } else {
        res.status(404).send({
            msg: "No se pudo eliminar, juego no encontrado"
        });
    }
};

export default boardgamesController;
