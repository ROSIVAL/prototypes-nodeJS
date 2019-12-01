const fs = require('fs').promises

read = async() =>{
    const data = await fs.readFile('file.txt', 'binary')
    return new Buffer.from(data)
    
}

try{
    read().then(data => console.log(data.toString()))
}catch (error){
    console.log(error)
}