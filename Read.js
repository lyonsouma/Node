const fs = require ('fs');

// READ FILES
/*
fs.readFile('./Test1.txt', (err, data) =>{

    if(err){
        console.log('Unknown file')
    }
    console.log(data.toString())
});
console.log('Cool')
*/

//WRITE FILES

fs.writeFile('./Test.txt', 'Write Hello', ()=>{
    console.log('File was written')
});