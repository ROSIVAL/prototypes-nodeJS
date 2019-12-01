//destruc as
const { writeFile } = require('fs')

writeFile('newFile.txt', 'Teste A1', err =>{
    if(err) throw err

    console.log('Create file....')
})