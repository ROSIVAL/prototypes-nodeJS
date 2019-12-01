const fs = require('fs')
const pastes = ['assets', 'images']


make = (dir) => {

    dir.forEach(paste => {
        fs.mkdir(`project/${paste}`, { recursive: true }, (err) => {
            if (err) throw err
            console.log('create directory')

        })
    })

}

make(pastes)