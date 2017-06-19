/**
 * ビルドスクリプト
 */

const fs = require('fs')
const child_process = require('child_process')
const exec = (command, display) => {
    return new Promise((resolve, reject) => {
        child_process.exec(command, (error, stdout, stderr) => {
            if (display) {
                console.log(stdout)
            }

            resolve(stdout, stderr)
        })
    })
}

// クリーンビルド
exec('rm -rf ./dist/').then(() => {
    return exec('rsync -a ./src/ ./dist/ --exclude "/script/" --exclude "/style/" --exclude "*.pug"', true).then(() => {
        console.log("resource copy done")
    })
}).then(() => {
    return exec('npm run webpack', true).then(() => {
        console.log("webpack done")
    })
}).catch((e) => {
    console.log("build failed")
    console.log(e)
})