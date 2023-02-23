// Creating a File
const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");

// Storing Time in Variable
const currentTime = new Date();
const date = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();
const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const FullDate = `${date}|${month}|${year}`;
const FullTime = `${hour}hrs|${minutes}mins|${seconds}secs`;

//Create file and write a file
var writeStream = fs.createWriteStream("current-date-time.txt");
writeStream.write(`Current Date and Time: ${FullDate} & ${FullTime}`);
writeStream.end();

//Read File in particular directory
fs.readdir("./", "utf-8", (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
  }
});

//API Endpoints
//create a server object:
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write(
      JSON.stringify({
        Current_date_time: `${new Date()}`,
      })
    );
  }
  response.end();
});

server.listen(8080);
