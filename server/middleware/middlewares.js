const cors = require('./cors');
const session = require('./session');
const database = require('./database');
const passport = require('./passport');

function applyMiddlewares(app) {
    return app.use(cors)
              .use(database)
              .use(session)
              .use(passport.initialize()) // passport middleware handles authenthentication, which populates req.user
              .use(passport.session());
}

module.exports = applyMiddlewares;