import path from 'path';

export default {
    context: path.join(__dirname, "./src/script/entry"),
    entry: {
        "index": "./index.js"
    },
    output: {
        path: path.join(__dirname, "./dist/script/entry"),
        filename: "[name].bundle.js"
    }
};