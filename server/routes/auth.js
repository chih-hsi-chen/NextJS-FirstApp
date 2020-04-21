const express = require('express');
const passport = require('../middleware/passport');
const { extractUser } = require('../lib/api-helper');

const router = express.Router();

router.delete('/auth', function (req, res, next) {
	req.logout();
	req.session.username = '';
	req.session.times = 1;

	return res.sendStatus(302);
});

router.post('/auth',
	function (req, res, next) {
		passport.authenticate('login', function (err, user, info) {
			if (err) {
				return res.status(400).send({
					message: 'server error occurs',
					user: extractUser(req),
					info,
				});
			}
			if (!user) {
				return res.status(400).send({
					message: info.reason,
					user: false,
				});
			}

			req.logIn(user, function (err) {
				if (err) {
					return res.status(400).send({
						message: 'login fail',
						user: extractUser(req),
					});
				}
				const { username } = req.body;

				if (req.session.username === username) {
					req.session.times++;
				} else {
					req.session.username = username;
					req.session.times = 1;
				}

				return res.status(200).send({
					message: 'login success',
					user: {
						username: req.user.username,
					}
				});
			});
		})(req, res, next);
	}
);

router.get('/users', function(req, res) {
    return res.json({
        user: extractUser(req),
    });
});

router.post('/users',
    function(req, res, next) {
        passport.authenticate('signup', function (err, user, info) {
            if (err) {
                return res.status(400).send({
                    message: 'error occurs',
                    user: extractUser(req),
                });
            }
            if (!user) { 
                return res.status(400).send({
                    message: info.reason,
                    user: extractUser(req),
                });
            }

            req.logIn(user, function (err) {
                if (err) {
                    return res.status(400).send({
                        message: 'signup fail',
                        user: extractUser(req),
                    });
                }
                const { username } = req.body;

                if (req.session.username === username) {
                    req.session.times++;
                } else {
                    req.session.username = username;
                    req.session.times = 1;
                }

                return res.status(200).send({
                    message: 'signup success',
                    user: extractUser(req),
                });
            });
        })(req, res, next);
    }
);

module.exports = router;