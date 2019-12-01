const {promisify} = require('util')

const writeFile = promisify(require('fs').writeFile)

writeFile('fileUtil.txt', 'Teste A2')
.then(()=>{
    console.log('file create...')
}).catch((err)=>{
    console.log(err)
})