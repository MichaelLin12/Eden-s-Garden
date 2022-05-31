const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our Home Page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our About Page')
    }
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find your page</p>
    <a href=/>Back to Home</a>`)
})

server.listen(5000)