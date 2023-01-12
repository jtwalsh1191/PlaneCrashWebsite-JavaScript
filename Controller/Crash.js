const Crash = require('../Model/crashes');
const Crashes = require('../Views/Crashes.json'); //json that displayed the 3 common crashes on home page

 module.exports.CrashSortByFatalitiesGL = async(req, res) => {
    //sends the collection over with it sorted by the example fatalities
    //It sorts the collection from greatest to least 

      let query = Crash.find().sort({ Fatalities: -1 }).lean();
      let promise = query.exec();
  
        promise.then((result) => {

          console.log("Sucessfully sorted fatalities greatest to least");  
          res.send(result);      

        });
  }

  module.exports.CrashSortByFatalitiesLG = async(req, res) => {
    //sends the collection over with it sorted by the example fatalities
    //It sorts the collection from least to greatest

      let query = Crash.find().sort({ Fatalities: 1 }).lean();
      let promise = query.exec();
  
        promise.then((result) => {

          console.log("Sucessfully sorted fatalities least to greatest");  
          res.send(result);      

        });
  }

  module.exports.CrashSortByAboardGL = async(req, res) => {
    //sends the collection over with it sorted by the example Aboard
    //It sorts the collection from greatest to least 

      let query = Crash.find().sort({ Aboard: -1 }).lean();
      let promise = query.exec();
  
        promise.then((result) => {

          console.log("Sucessfully sorted Aboard greatest to least");  
          res.send(result);      

        });
  }

  module.exports.CrashSortByAboardLG = async(req, res) => {
    //sends the collection over with it sorted by the example Aboard
    //It sorts the collection from least to greatest 

    let query = Crash.find().sort({ Aboard: 1 }).lean();
    let promise = query.exec();

      promise.then((result) => {

        console.log("Sucessfully sorted Aboard least to greatest ");  
        res.send(result);      

      });
}


//route to the map1.html with the title
module.exports.map1 = async(req, res) => {
  res.render("map1.html",{
    title: 'This is a map of New York'
  });
};
//route to the map2.html with the title
module.exports.map2 = async(req, res) => {
  res.render("map2.html",{
    title: 'This is a map of Cambodia'
      
  });
};
//route to the map3.html with the title
module.exports.map3 = async(req, res) => {
  res.render("map3.html",{
    title: 'This is a map of Cambodia'
  });
};

//Route to the homepage
module.exports.homepage = async(req, res) => {
  res.render('Default.html', {
      title: 'Homepage',
      Crashes: Crashes.Airplane
});
};

//route to read more link on homepage to display the json file information
module.exports.Database = async(req, res) => {
  const Crash = Crashes.Crash.find(p => p.id === req.query.id);
  res.render("database.html", {
    title: `About ${Crash.Location} ${Crash.Date}`,
    Crash,
  });
};

/**
 * A function that lists all crashes with all information that is
 * in MongoDB. 
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.list_all = async (req, res) => {
      
      let collection = Crash

      collection.find().lean().exec(function (err, crashes) {
        if (err) throw err;
        if(crashes.length == 0){
            console.log('Database is empty');
        }

        console.log(crashes.length+" crash(s) sent.")
        res.send(crashes);
       });

};

/**
 * A function that lists all crashes with all information that is
 * in MongoDB. 
 * @param {*} req 
 * @param {*} res 
 */
 module.exports.list_top = async (req, res) => {
      
  let collection = Crash

  collection.find({ Fatalities: { $gte: 500 } }).lean().exec(function (err, crashes) {
    if (err) throw err;
    if(crashes.length == 0){
        console.log('Database is empty');
    }

    console.log(crashes.length+" crash(s) sent.")
    res.send(crashes);
   });

};