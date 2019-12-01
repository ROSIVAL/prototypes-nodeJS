const fs = require('fs')

//nosync
fs.readFile('file.txt', (error, data)=>{

    if(error) throw error

    console.log(data.toString())
})

//async
const text = fs.readFileSync('file.txt')

console.log(text.toString())