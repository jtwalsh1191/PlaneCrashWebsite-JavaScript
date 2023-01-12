//node modules
const express = require('express');
const path = require("path");
const app = express();
const mongoDB = require('./utils/db.js');
const CrashControl = require('./controller/Crash');


async function loadDBClient() {
    await mongoDB.connectToDB();
  };  
  loadDBClient();

  //display the defacto index.html
  app.use(express.static(path.join(__dirname + '/Views')));

  //To be accessed by list.js in views for ajax
  app.get('/crashes', CrashControl.list_all);

  
  //Sort by fatalities, greatest to least 
  app.get('/CrashSortByFatalitiesGL', CrashControl.CrashSortByFatalitiesGL);
  //Sort by fatalities, least to greatest 
  app.get('/CrashSortByFatalitiesLG', CrashControl.CrashSortByFatalitiesLG);
  //Sort by aboard, greatest to least
  app.get('/CrashSortByAboardGL', CrashControl.CrashSortByAboardGL);
  //Sort by Aboard, least to greatest 
  app.get('/CrashSortByAboardLG', CrashControl.CrashSortByAboardLG);
  app.get('/topCrashes', CrashControl.list_top);

  //Display all of the maps used on the homepage
  app.get('/map1', CrashControl.map1);
  app.get('/map2', CrashControl.map2);
  app.get('/map3', CrashControl.map3);

 //Route to homepage
  app.get('/', CrashControl.homepage);
  
  //Display whole database and chart, doesn't exist anymore
  app.get('/database', CrashControl.Database);

//Listening at localhost: 7000
const server = app.listen(7000, () => {
  console.log('Server listening at http://localhost:%d', 7000);
 })

