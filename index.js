// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  newArray = []
  newArray.push(drivers[0], drivers[1]);
  return newArray;
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(Math.max(drivers.length -2, 1))
  
}