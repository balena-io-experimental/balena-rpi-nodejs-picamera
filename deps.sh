#!/bin/bash

set -o errexit
set -o pipefail

#pull in firmware updates to run raspistill and raspivid
apt-get -q update
apt-get -y install libraspberrypi-bin
