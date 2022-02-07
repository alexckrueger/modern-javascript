/* global dayjs */
const dayjs = require("dayjs");

console.log("oi oi oi");
var time = dayjs("2019-01-25").format("DD/MM");
console.log(time);

const Chance = require("chance");
var chance = new Chance();
var myRandomString = chance.string();

console.log(myRandomString);
console.log(chance.integer({ min: 0, max: 200 }));
let falsey = chance.falsy();
console.log(`What your wrote is ${falsey}!`);
console.log("what is this error >:(");
