const fs = require('fs')

console.log((process.hrtime()[0]/60).toFixed(5))
console.log('executed first file...')

const data = fs.readFileSync('./files/file.txt')

console.log('executed last file...')

console.log((process.hrtime()[0]/60).toFixed(5))