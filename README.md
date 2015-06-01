# resin.io + picamera + node.js 

This is a simple app that demonstrates how to get started with the raspberry pi camera module, using node.js and [resin.io](https://resin.io/). All it does is snap one photo and then stores it in the /data directory on the pi.

**Before you get started**, you will need to make some changes to the downloaded RPI/RPI2 image to enable the camera, instructions here -> http://docs.resin.io/#/pages/hardware/i2c-and-spi.md#raspberry-pi-camera-module

The /data directory allows the data, in this case the image, to presist between code deployments with resin.io. It then just sits in an infinite loop, this loop allows you to use the web terminal session to poke around on the pi itself and see that your photo was successfully saved in the /data directory.

This project depends on raspistill, this is installed when the "apt-get install libraspberry-bin" is run in the deps.sh script.

As an extension to this project you can checkout the [`lcd-branch`] (https://github.com/shaunmulligan/resin-rpi-nodejs-picamera/tree/lcd-branch) on this repo and you will see this intergrated with the awesome Adafruit [piTFT](http://www.adafruit.com/product/1601), which is a 2.8" LCD display designed for the pi.
