import { Router } from 'express';
import userRouter from './user-router';
import portRouter from './port-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/ports', portRouter);

// Export default.
export default baseRouter;
