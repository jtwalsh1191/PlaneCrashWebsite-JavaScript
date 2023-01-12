const v = require('../utils/vaildate-feilds');

class Crashes {
    constructor(Date, Time, Fatalities, Aboard, Location){
        this.Date = Location;
        this.Time = Time;
        this.Fatalities = Fatalities;
        this.Aboard = Aboard
        this.Location = Location;
    }
    async isValid(){
        return v.validate_fields(this.Date, this.Time, this.Fatalities,this.Aboard, this.Location);
    }

}

module.exports.Crashes = Crashes;
