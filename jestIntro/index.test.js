//const { TestWatcher } = require("@jest/core");
var {sum,multiply} = require("./index.js");
//console.log(sum);
//var multiply = require("./index.js")

//Describe the test method>>>
describe("Test case for Sum function", function(){
    xtest("Sum function is defined", () => {
        expect(sum(2,3)).toBe(5)
    });

    test("Multiply function is defined", () => {
        expect(multiply(2,3)).toBe(6)
    });
});

/*
var sum = require("./index.js");

describe("Testing", function () {
  test("It should return sum", function () {
    expect(sum([1, 2, 3, 4, 5])).toEqual(15);
  });

  test("It should return sum", function () {
    expect(sum([2, 4, 6, 8, 10])).toEqual(30);
  });

  test("It should return sum", function () {
    expect(sum([1, 3, 5, 7, 9])).toEqual(25);
  });

  test("It should return sum", function () {
    expect(sum([1, 2, 
function sum(data){
    var total = 0;
    for (var i = 0; i < data.length; i++){
        total += data[i];
    }
    //console.log(total);
    return total;
}

module.exports = sum;

*/