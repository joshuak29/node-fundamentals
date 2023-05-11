const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === '/') {
    res.end('Welcome to our homepage')
  }
  if (req.url === '/about') {
    res.end('Our Story')
  }
  res.end('Sorry')
})

server.listen(8000)
