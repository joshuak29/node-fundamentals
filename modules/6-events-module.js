const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('fire', () => {
  console.log('fired')
})

customEmitter.emit('fire')


// with HTTP 
const http = require('http')

const server = http.createServer() //emits request event on any request

server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)