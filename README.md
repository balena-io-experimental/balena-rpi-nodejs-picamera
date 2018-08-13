# resin.io + picamera + node.js 

This is a simple app that demonstrates how to get started with the raspberry pi camera module, using node.js and [resin.io](https://resin.io/). All it does is snap one photo and then stores it in the /data directory on the pi.

**Before you get started**, you will need to make some changes to the downloaded RPI/RPI2 image to enable the camera, instructions here -> http://docs.resin.io/#/pages/hardware/i2c-and-spi.md#raspberry-pi-camera-module

The /data directory allows the data, in this case the image, to presist between code deployments with resin.io. It then just sits in an infinite loop, this loop allows you to use the web terminal session to poke around on the pi itself and see that your photo was successfully saved in the /data directory.

This project depends on raspistill, this is installed the majority of our raspbian/Debian base images for the Raspberry Pi family.
