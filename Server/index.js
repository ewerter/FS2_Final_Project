const express = require('express');
const appServer = express();
const port = 8080;
const path = require('path');

appServer.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+'/Static/home.html')) });

appServer.get('/index', (req, res) =>{
  res.sendFile(path.join(__dirname+'/Static/index.html')) });

appServer.get('/signin', (req, res) =>{
  res.sendFile(path.join(__dirname+'/Static/signin.html')) });

appServer.get('/user', (req, res) =>{
  res.sendFile(path.join(__dirname+'/members-page.html')) });

appServer.get('/infov2', (req, res) =>{
  res.sendFile(path.join(__dirname+'/Static/infov2.html')) });

appServer.get('/about', (req, res) =>{
  res.sendFile(path.join(__dirname+'/Static/about.html')) });


var assetsPath = path.join(__dirname, './Static');
appServer.use(express.static(assetsPath));
console.log(assetsPath)


//appServer.use('/static', express.static(__dirname + '/../server'));
appServer.listen(port);