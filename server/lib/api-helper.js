import {Request, Response, NextFunction} from 'express';

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
export const ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

/**
 * 
 * @param {Request} req 
 */
export const extractUser = function(req) {
    if (!req.user) return null;
    const {
        username
	} = req.user;
	
    return {
        username
    };
}