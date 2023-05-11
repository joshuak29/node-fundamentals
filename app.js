const http = require('http')
const { createReadStream, createWriteStream, readFileSync } = require('fs')

const rStream = createReadStream('./content/big.txt', 'utf-8', { highWaterMark: 200 })
const wStream = createWriteStream('./content/newBig.txt')

http
.createServer((req, res) => {
  rStream.on('open', (data) => {
    res.end(data)
  })
})
// .createServer((req, res) => {
//   const text = readFileSync('./content/big.txt')
//   res.end(text)
// })
.listen(5000)