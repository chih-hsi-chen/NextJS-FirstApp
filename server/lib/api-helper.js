

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

/**
 * 
 * @param {Request} req 
 */
const extractUser = function(req) {
    if (!req.user) return null;
    const {
        username
	} = req.user;
	
    return {
        username
    };
}

module.exports = {
    ensureAuthenticated,
    extractUser
};