const fs = require('fs')

var json = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

json["build"] = "node tool/build/build.js"
json["webpack"] = "webpack --progress"
json["build-pug"] = "pug --hierarchy -o ./dist/ ./src/"
json["build-sass"] = "./tool/build/build-sass.sh"

fs.writeFileSync("./package.json", JSON.stringify(json, null, 4));