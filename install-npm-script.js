const fs = require('fs')

var json = JSON.parse(fs.readFileSync('./package.json', 'utf8'))

json["scripts"] = {}
json["scripts"]["build"] = "node tool/build/build.js"
json["scripts"]["webpack"] = "webpack --progress"
json["scripts"]["build-pug"] = "pug --hierarchy -o ./dist/ ./src/"
json["scripts"]["build-sass"] = "./tool/build/build-sass.sh"

fs.writeFileSync("./package.json", JSON.stringify(json, null, 4));