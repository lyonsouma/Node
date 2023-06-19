const fs = require ('fs');

fs.readFile('./Test1.txt', (err, data) =>{

    if(err){
        console.log('Unknown file')
    }
    console.log(data.toString())
});
console.log('Cool')