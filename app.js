// const Circle =require('./circle');
// const circle = new Circle();
// console.log(circle.area(5));
// console.log(circle.circumferance(10));
// console.log(area(5));
// console.log(circumference(5));

const http = require('http')
const fs =require(`fs`);
const { resolve } = require('path');
const { rejects } = require('assert');
const PORT=4000

const func1= ()=>console.log("func1");
const func2= ()=>console.log("func2");
const func3= ()=>{
    console.log("func3")
    process.nextTick(()=>{
        console.log("I am nexttivc");
    })
    setTimeout(() => {
        func1()
    }, 0);

    new Promise((resolve,reject)=>{resolve("I am a promise")}).then((res)=>console.log(res))
    func2()
};
func3();




const server=http.createServer((req,res)=>{
    console.log(req.url)
    // res.write("hello node");
    if(req.url == '/'){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.readFile('page/home.html','utf-8',(err,data)=>{
            if (err) throw err;
            res.write(data)
            res.end();
        })
    }
    else if (req.url == '/about'){
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.readFile('page/about.html','utf-8',(err,data)=>{
            if (err) throw err;
            res.write(data)
            res.end();
        })
    }  
    else if (req.url === '/create-file'){
        res.writeHead(200,{"Content-Type":"text/html"});
        const data ='<h1>this is thest file updated</h1>'
        fs.appendFile('temp/test.html ',data,(err)=>{
            if (err) throw err;
            res.write("file is created")
            res.end();
        })
    }  
    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        fs.readFile('page/404.html','utf-8',(err,data)=>{
            if (err) throw err;
            res.write(data)
            res.end();
        })
    }

})
server.listen(PORT);
console.log(`Server running at : http://localhost:${PORT}`)