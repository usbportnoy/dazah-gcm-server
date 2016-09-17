# Purpose
This is a simple node js webserver that catches requests from the dazah webhooks. After being catched it sends a push notification to the associated android device in the request params.

# Notes
The default page was left public, the only class that does anything is the events class. This was aimed to be as simple as possile.

# Prerequisites
nodejs installed
enviroment varible 'port' set or port 3000 free

# Installation
git clone https://github.com/usbportnoy/dazah-gcm-server.git
insert username and password if requested

in routes/events.js replace TOKEN with google gcm token

cd dazah-gcm-server
npm install
node bin/www

# TODOs
Use token from env vars
remove useless defualt pages



