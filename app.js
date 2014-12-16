var RaspiCam = require("raspicam");

var camera = new RaspiCam({
	mode: "photo",
	output: "../data/image.jpg",
	encoding: "jpg",
	timeout: 100 
});

camera.on("started", function( err, timestamp ){
	console.log("photo started at " + timestamp );
});


camera.on("read", function( err, timestamp, filename ){
	console.log("photo image captured with filename: " + filename );
	//we can now do stuff with the captured image, which is stored in /data
});

camera.on("exit", function( timestamp ){
	console.log("photo child process has exited at " + timestamp );
});

camera.start();
