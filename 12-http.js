const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('home page')
    }
    if(req.url ==='/about'){
        res.end('here about')
    }
    res.end(`
        <h1>OOPS!</h1>
        <p>no page what u are looking for</p>
        <a href="/">back home</a? 
 `)
})


server.listen(5000)
