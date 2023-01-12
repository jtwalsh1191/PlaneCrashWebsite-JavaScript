/*var assert = require('assert');
const { Contact } = require('../model/CrashestoValidate');
const request = require('request');

describe('Crashes with Mocha', function(){
    describe('Test Models', function(){
        describe('Crash', function(){
            let cDate = '2000-06-17';
            let cTime = '8:00';
            let cFatalities = '29'
            let cAboard = '29'
            let cLocation = 'New York'
            var crash = new crash(cDate, cTime, cFatalities, cLocation);       
            it('Test creation of a valid user with parameters matching', function(){                
                assert.strictEqual(crash.Date, '2000-06-17');
                assert.strictEqual(crash.Time, '8:00');
                assert.strictEqual(crash.Fatalities, '29');
                assert.strictEqual(crash.Aboard, '29');
                assert.strictEqual(crash.Location, 'New York');
            });
            it('Test if user is invalid function (Invalid Date)', async function(){
                let c1 = new crash('20000617', cTime, cFatalities,cAboard, cLocation);
                assert.strictEqual(await c1.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Time)', async function(){
                let c2 = new crash(cDate, 'eight', cFatalities, cAboard, cLocation);
                assert.strictEqual(await c2.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Fatalities)', async function(){
                let c3 = new crash(cDate, cTime, 'Twenty Nine', cAboard, cLocation);
                assert.strictEqual(await c3.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Aboard)', async function(){
                let c3 = new crash(cDate, cTime, cFatalities, 'Twenty Nine', cLocation);
                assert.strictEqual(await c3.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Location)', async function(){
                let c3 = new crash(cDate, cTime, cFatalities, 'Joseph26@gmail.com');
                assert.strictEqual(await c3.isValid(), false);
            });
        });
    });
});*/

var assert = require('assert');
const { Contact } = require('../model/CrashestoValidate');
//const request = require('request');
const db = require('../utils/db').connectionStatus;

describe('Crashes with Mocha', function(){
    describe('Test Models', function(){
        describe('Crash', function(){
            let cDate = '2000-06-17';
            let cTime = '8:00';
            let cFatalities = '29'
            let cAboard = '29'
            let cLocation = 'New York'
            var crash = new crash(cDate, cTime, cFatalities, cLocation);       
            it('Test creation of a valid user with parameters matching', function(){                
                assert.strictEqual(crash.Date, '2000-06-17');
                assert.strictEqual(crash.Time, '8:00');
                assert.strictEqual(crash.Fatalities, '29');
                assert.strictEqual(crash.Aboard, '29');
                assert.strictEqual(crash.Location, 'New York');
            });
            it('Test if user is invalid function (Invalid Date)', async function(){
                let c1 = new crash('20000617', cTime, cFatalities,cAboard, cLocation);
                assert.strictEqual(await c1.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Time)', async function(){
                let c2 = new crash(cDate, 'eight', cFatalities, cAboard, cLocation);
                assert.strictEqual(await c2.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Fatalities)', async function(){
                let c3 = new crash(cDate, cTime, 'Twenty Nine', cAboard, cLocation);
                assert.strictEqual(await c3.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Aboard)', async function(){
                let c3 = new crash(cDate, cTime, cFatalities, 'Twenty Nine', cLocation);
                assert.strictEqual(await c3.isValid(), false);
            });
            it('Test if user is invalid function (Invalid Location)', async function(){
                let c3 = new crash(cDate, cTime, cFatalities, 'Joseph26@gmail.com');
                assert.strictEqual(await c3.isValid(), false);
            });
        });
    });
    describe('connectionStatus', function(){
        describe('Mongo Status, it should return 1, indicidcating connected', function(){     
            it('Test creation of a valid user with parameters matching', function(){                
                assert.strictEqual(connectionStatus(), '1');   
                        /*
                        ready states:
                        0: disconnected
                        1: connected
                        2: connecting
                        3: disconnecting
                        */
            });
            
            
        });
    });
});