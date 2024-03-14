const os = require('os');


//info about current user

const user = os.userInfo()
console.log(user)


//system uptime

console.log(`system uptime is: ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMme: os.freemem()
}

console.log(currentOS)