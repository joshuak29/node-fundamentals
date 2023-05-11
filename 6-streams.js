const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./path/to-file', { hignWaterMark: 90000 })
// const stream = createReadStream('./path/to-file', { encoding: 'utf-8' })

stream.on('data', (res) => {
  console.log(res)
})

stream.on('error', (err) => {
  console.log(err)
})

// const http = require('http')
// const { createReadStream, createWriteStream, readFileSync } = require('fs')

// const rStream = createReadStream('./content/big.txt', 'utf-8', { highWaterMark: 200 })
// const wStream = createWriteStream('./content/newBig.txt')

// http
// .createServer((req, res) => {
//   rStream.on('open', (data) => {
//     res.end(data)
//   })
// })
// // .createServer((req, res) => {
// //   const text = readFileSync('./content/big.txt')
// //   res.end(text)
// // })
// .listen(5000)