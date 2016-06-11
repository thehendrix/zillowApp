#Zillow App
Version 1.0.0

##Installation
Type in the terminal the following while in the directory where *package.json* 
and *startZillowApp.js* are located:
```
$ npm install
```

##Features
- User can type an address in the text box and search for details about 
their address
- Calls *Retsly API* to get up to 6 home listings
- Hosts static files (using *Express.js*) in */webapps* 
- Unit test for API 

##Quick Start
Type in the terminal the following while in the directory where *package.json* 
and *disalyzer.js* are located:
```
$ npm start
```
The terminal should say, **"Express Server listening on port 4000"**.

Then in your browser (*e.g. Chrome*) type the address: 
```
localhost:4000/webapps/zillowApp.html
```

##Running The Unit Test
While the program is still running, open another terminal in the same working
directory and type:
```
npm test
```
