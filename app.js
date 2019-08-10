const RaspiCam = require("raspicam");
const handler = require('serve-handler');
const http = require('http');

// Set up file server
const server = http.createServer((request, response) => {
	return handler(request, response, {
		'public': '/data',
		'renderSingle': 'true'
	});
  })

server.listen(80, () => {
   console.log('Server running on port 80');
});

// Camera related functions
const camera = new RaspiCam({
	mode: "photo",
	output: "/data/image.jpg",
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
	console.log("Connect to the 'main' service and visit the /data folder to find the captured image");
	console.log("or connect to the device on port 80 locally / connect over the Public Device URL");
	console.log("To snap another picture, restart the service");
});

camera.start();
