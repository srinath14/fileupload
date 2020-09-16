const express = require('express');
const app = express();
app.use(express.json());
var courses =[
    {
        name : 'javascript',
        time :'10days'
    },
    {
        name : 'python',
        time : '20 days'
    }
];
var port = process.env.port||3000;
app.get('/',function(req,res){
    res.send('hello world!');
});
app.get('/courses',function(req,res){
    res.send(courses);
});
app.get('/courses/:name',function(req,res){
    var course = courses.find(e => e.name===req.params.name);
    res.send(course);
});
app.post('/courses',function(req,res){
    const course ={
    name:req.body.name,
    time:req.body.time
    }
    courses.push(course);
    res.send(course);
})
var server = app.listen(port,function(){
    console.log(`iam listening at ${port} `)
});
server.close()

