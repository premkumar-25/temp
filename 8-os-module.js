const os= require('os')
const { uptime } = require('process')

//info about current user
const user= os.userInfo()

//method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    memory:os.totalmem(),
    freemem:os.freemem(),
}

console.log(currentOS)