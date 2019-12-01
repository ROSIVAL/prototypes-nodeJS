const EventEmitter = require('events')
//criate copy class
class Event extends EventEmitter {}
const myEvent = new Event()


myEvent.on('security', (x,y)=>{

    console.log(`event executed: ${x} ${y}`)
})

myEvent.emit('security', 'userAdmin', 'edit Salary')