var sumNumber = require("./sum.js");


//Describe function works here suit describes the suite of test cases enumerated by the "it" functions
describe("Testing for Sum function", function () {
    test("It should return sum", function () {
      expect(sumNumber(9,6)).toEqual(15);
    });

});
