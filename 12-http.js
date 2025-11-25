const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to Sir-josh Home page')
  }
   if (req.url === '/about') {
    res.end('This is a brief show of our history')
   }
  res.end(`
    <h1>Opps!</h1>
    <p>The page you are looking for cannot be found</p>
    <a href="/">Back Home</a>
    `)
})

server.listen(5000)