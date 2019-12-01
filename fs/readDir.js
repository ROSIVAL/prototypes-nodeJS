const fs = require('fs')

fs.readdir('../', (error, data) =>{

    if(error) throw error

    data.forEach((files)=>{
        console.log(__dirname +'\\'+ files)
    })

})