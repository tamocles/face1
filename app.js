const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const port = 5000;
const server = http.createServer(app);

const router = require('./router/main.js');

app.use(express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

 app.set('view engine','ejs');
 app.set('views',path.join(__dirname,'./views'));

app.use('/',router);


 server.listen(port,()=>{
 	console.log(`servidor iniciado en el puerto ${port}`);
 })