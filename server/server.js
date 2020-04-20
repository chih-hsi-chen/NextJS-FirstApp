const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/about', (req, res) => {
		return app.render(req, res, '/about', req.query);
	})

	server.get('/protected', (req, res) => {
		return app.render(req, res, '/protected', req.query);
	})

	server.all('*', (req, res) => {
		return handle(req, res);
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`);
	})
})