var bytesCheck = require("./bytes");


//Describe function works here suit describes the suite of test cases enumerated by the "it" functions
describe("Testing for convert Bytes", function () {
    
    test("It should return How much capacity in bytes", function () {
      expect(bytesCheck(435)).toBe("435bytes");
    });


    //Test case for MB
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(3398)).toBe("3.3KB");
      });

      
});
