const fs = require('fs');

fs.readFile('./hello.txt', (err,data) =>{
    if(err){
        console.log('erooorr!')
    }
    console.log(data.toString());

})