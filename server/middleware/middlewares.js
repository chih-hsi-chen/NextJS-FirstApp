import cors from './cors';
import session from './session';
import database from './database';
import {Express} from 'express';
import passport from './passport';

/**
 * 
 * @param {Express} app 
 */
function applyMiddlewares(app) {
    return app.use(cors)
              .use(database)
              .use(session)
              .use(passport.initialize()) // passport middleware handles authenthentication, which populates req.user
              .use(passport.session());
}

export default applyMiddlewares;