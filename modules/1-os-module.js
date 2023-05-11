const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
  upTime: os.uptime(),
}

console.log(currentOs);