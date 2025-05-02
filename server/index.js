const http = require('http')

const PORT = 3000;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)   // В запросе будет: / GET

    res.setHeader('Content-Type', 'text/plain')
    res.write('<h1>Hello from NodeJS</h1>')
    res.write('<h2>Hello from NodeJS</h2>')
    res.write('<h3>Hello from NodeJS</h3>')
    res.end(`
   <div style="background: red; width: 200px; height: 200px;">
    <h1>Test</h1>
   </div>
  `)
})

server.listen(PORT, 'localhost', (error) => {
    console.log('Server is running...')
    error ? console.log(error) : console.log(`Listening port  ${PORT}`);
})
