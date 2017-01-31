/**
 * Created on 2017-01-31.
 * @author: Gman Park
 */

var compression = require('compression');

module.exports = {
    port: 8000,
    // files: ["../src/**/*.{html,htm,css,js}"],
    server: {
        middleware: {
            // overrides the second middleware default with new settings
            1: compression(), //gzip configure
        }
    }
};