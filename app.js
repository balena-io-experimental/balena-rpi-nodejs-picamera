var RaspiCam = require("raspicam");

var camera = new RaspiCam({
	mode: "photo",
	output: "../data/image.jpg",
	encoding: "jpg",
	timeout: 0 // take the picture immediately
});

camera.on("started", function( err, timestamp ){
	console.log("photo started at " + timestamp );
});

camera.on("read", function( err, timestamp, filename ){
	console.log("photo image captured with filename: " + filename );
});

camera.on("exit", function( timestamp ){
	console.log("photo child process has exited at " + timestamp );
});

camera.start();

// var users = {};
// if(process.env.TTYUSER && process.env.TTYPASSWORD) {
// 	users[process.env.TTYUSER] = process.env.TTYPASSWORD;
// }
// require('tty.js').createServer({
// 	shell: 'bash',
// 	users: users,
// 	port: process.env.TTYPORT || process.env.PORT
// }).listen();