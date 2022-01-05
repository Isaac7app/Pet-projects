const fs = require('fs');

fs.readFile('./hello.txt', (err,data) =>{
    if(err){
        console.log('erooorr!')
    }
    console.log('Async',data.toString());

})

const file2 = fs.readFileSync('./hello.txt')
console.log('Sync',file2.toString())
   
