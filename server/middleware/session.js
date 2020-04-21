const session = require('express-session');
const connectMongo = require('connect-mongo');

const MongoStore = connectMongo(session);

const mySession = function (req, res, next) {
    const mongoStore = new MongoStore({
        client: req.client,
        dbName: process.env.SESSION_STORE_DB_NAME,
    });
    return session({
        secret: process.env.SECRET,
        store: mongoStore,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
    })(req, res, next);
};

module.exports = mySession;