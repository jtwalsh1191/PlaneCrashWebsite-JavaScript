let validator = require('validator');

let _validate_Date = (Date) => {
	return new Promise((resolve, reject) => {
		Date = Date.split(' ').join(''); //Removing blanks
		let is_valid = validator.isDateURI(Date);
		if (is_valid){
			resolve('The Date is valid.');
		} else {
			reject('The Date is invalid.');
		}
	});
};

let _validate_Time = (Time) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isInt(Time);
		if (is_valid){
			resolve('The Time is valid.');
		} else {
			reject('The Time is invalid.');
		}
	});
};

let _validate_Fatalities = (Fatalities) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isInt(Fatalities);
		if (is_valid){
			resolve('The Fatalities is valid.');
		} else {
			reject('The Fatalities is invalid.');
		}
	});
};

let _validate_Aboard = (Aboard) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isInt(Aboard);
		if (is_valid){
			resolve('The Aboard is valid.');
		} else {
			reject('The Aboard is invalid.');
		}
	});
};

let _validate_Location = (Location) =>{
	return new Promise((resolve, reject) => {
		let is_valid = true;
		if (is_valid){
			resolve('The Location is valid.');
		} else {
			reject('The Location is invalid.');
		}
	});
};

module.exports.validate_fields = async (Date, Time, Fatalities, Aboard, Location) => {
	return Promise.all([_validate_Date(Date), _validate_Time(Time), 
							_validate_Fatalities(Fatalities), _validate_Aboard(Aboard), _validate_Location(Location)])
		.then((values) => {
			// console.log(values);
			return true;
		})
		.catch((err) => {
			// console.log(err);
			return false;
		});
};

