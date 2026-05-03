import { Router } from 'express';

import teamsRouter from '../modules/teams/teams.routes.js';
import boardgamesRouter from '../modules/boardgames/boardgames.routes.js';
const indexRouter = Router();

indexRouter.use("/teams", teamsRouter);
indexRouter.use("/boardgames", boardgamesRouter);

export default indexRouter;