var sumNumber = require("./sum.js");


//Describe function works here suit describes the suite of test cases enumerated by the "it" functions
describe("Testing for Sum function", function () {
    test("It should return sum", function () {
      expect(sumNumber([9,6])).toBe(15);
    });

    test("It should return sum", function () {
      expect(sumNumber([2, 4, 6, 8, 10])).toEqual(30);
    });
  
    test("It should return sum", function () {
      expect(sumNumber([1, 3, 5, 7, 9])).toEqual(25);
    });

    test("It should return sum", function () {
      expect(sumNumber([1])).toEqual(1);
    });
});
