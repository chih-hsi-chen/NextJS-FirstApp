const express = require('express');
const next = require('next');
const applyMiddlewares = require('./middleware/middlewares').default;
const apiRouter = require('./routes/auth');
const ensureAuthenticated = require('./lib/api-helper').ensureAuthenticated;
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	var server = express();

	server.use(bodyParser.json());
	server.use(bodyParser.urlencoded({ extended: false }));
	server = applyMiddlewares(server);

	server.get('/about', (req, res) => {
		return app.render(req, res, '/about', req.query);
	});

	server.get('/protected', (req, res) => {
		return app.render(req, res, '/protected', req.query);
	});

	server.use('/api', apiRouter);

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`);
	});
});