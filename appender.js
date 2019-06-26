let fs = require("fs"),
    path = require("path");

const defaults = {
    path: "./Routes"
}

class Appender {
    constructor(app, settings = defaults) {
        this.app = app;
        this.settings = settings;

        fs.readdir(this.settings.path, (err, files) => {
            files.forEach(file => this.appendRoutes(file));
        });
    }

    appendRoutes(file) {
        let js = require(path.resolve(this.settings.path, file));

        let root = js[0]["root"];

        let routes = js.slice(1);

        routes.forEach(route => {
            this.parseRoute(root, route);
        })
    }

    parseRoute(root, route) {
        let type = route.type.toLowerCase();

        this.app[type](root + route.path, [ ...route.middleware, route.fn ]);
    }
}

module.exports = (app, settings) => new Appender(app, settings);