const path = require("path");

module.exports = {
    entry: "./src/js/index.js",
    module: {
        rules: [
            {
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};