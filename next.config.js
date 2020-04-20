const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const dotenv = require('dotenv');
const path = require('path');

let result = null;

module.exports = (phase, { defaultConfig }) => {
    if(phase === PHASE_DEVELOPMENT_SERVER) {
        result = dotenv.config();
    } else {
        result = dotenv.config({
            path: path.resolve(process.cwd(), '.env.production'),
        });
    }
    return {
        env: {
            NODE_ENV: process.env
        },
    }
};