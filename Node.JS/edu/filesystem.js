const fs = require('fs');

fs.readFile('./tekst.txt','utf-8', (err, file)=>{
    console.log(err,file)
})

