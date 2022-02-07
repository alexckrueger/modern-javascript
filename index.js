/* global dayjs */
var dayjs = require("dayjs");

console.log("oi oi oi");
var time = dayjs("2019-01-24").daysInMonth();
console.log(time);

var Chance = require("chance");
var chance = new Chance();
var myRandomString = chance.string();

console.log(myRandomString);
console.log(chance.integer({ min: 0, max: 200 }));
console.log(chance.falsy());
