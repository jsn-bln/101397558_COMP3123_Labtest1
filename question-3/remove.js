const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, 'Logs')

if(fs.existsSync(dir)){
    fs.readdir(dir, (err, files) => {
        if(err){
            console.log(err)
            return;
        }
        
        files.forEach((file) => {
            const filePath = path.join(dir, file);
            fs.unlink(filePath, (err) => {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(`deleted files ... ${file}`)
                }
            })
        })
    })
}else{
    console.log('Logs doesnt exist')
}