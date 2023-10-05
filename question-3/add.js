const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'Logs')

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}

process.chdir(dir)


for(let i = 1; i <= 10; i++){
    const fileName = `log${i}.txt`
    const content = `logfile number${i}`

    fs.writeFileSync(fileName, content)
    console.log(fileName)
}