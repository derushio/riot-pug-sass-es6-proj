module.exports = {
    entry: {
        "index": "./src/script/entry/index.js"
    },
    output: {
        path: __dirname + "/dist/script/entry/",
        filename: "[name].bundle.js"
    }
};