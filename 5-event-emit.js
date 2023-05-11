const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('fire', () => {
  console.log('fired')
})

customEmitter.emit('fire')

