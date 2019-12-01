const {writeFile} = require('fs')

createFile = (name, content) =>{

    return new Promise((resolve, reject)=>{
        writeFile(name, content, err =>{
            if(err) throw err
            resolve()
        })
    })
}

createFile('promiseFile.txt', 'Teste A3')
.then(()=> console.log('create file!!'))
.catch(err => console.log(err))