/*
const { SEND_MAIN_PING } = require('./constants');
const myModule = require('./module');
const http = require('http')

console.log(myModule.sum(1,2));
console.log(myModule.minus(1,2));

const express = require('express')
const app = express()

app.get('/', function (req, res){
  res.send('Hello')
})
app.listen(3000)


const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('What is ur name? ', (answer) => {
  console.log('hello '+ answer);
  rl.close();
});

*/

const fs = require('fs');
//const data = fs.readFileSync('./hello.txt', {encoding: "utf-8"});
fs.appendFileSync('./hello.txt', '\nwelcome!')
