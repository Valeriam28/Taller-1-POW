import express from 'express';
import boardgamesController from './boardgames.controller.js';

const boardgamesRouter = express.Router();

boardgamesRouter.get('/', boardgamesController.getGames);
boardgamesRouter.get('/:id', boardgamesController.getGame);
boardgamesRouter.post('/', boardgamesController.addGame);
boardgamesRouter.put('/:id', boardgamesController.updateGame);
boardgamesRouter.delete('/:id', boardgamesController.deleteGame);

export default boardgamesRouter;