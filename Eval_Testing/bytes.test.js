var bytesCheck = require("./bytes");


//Describe function works here suit describes the suite of test cases enumerated by the "it" functions
describe("Testing for convert Bytes", function () {
    
    test("It should return How much capacity in bytes", function () {
      expect(bytesCheck(435)).toBe("435bytes");
    });


    //Test case for KB.fraction check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(3398)).toBe("3.3KB");
    });
    
    //Test case for KB check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(490398)).toBe("479KB");
    });

    //Test case for MB.fraction check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(6544528)).toBe("6.2MB");
    });

    //Test case for MB  check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(23483023)).toBe("22MB");
    });

    //Test case for GB.fraction check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(3948578493)).toBe("3.7GB");
    });

    //Test case for GB check
    test("It should return How much capacity in MB", function () {
        expect(bytesCheck(30498505889)).toBe("28GB");
    });

});
