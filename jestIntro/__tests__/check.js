var sum = require("../index.js");

//Describe the test method>>>
describe("Test case from tests: for Sum function", function(){
    test("Sum function is defined", () => {
        expect(sum).toBeDefined()
    });
})

describe("toBe tests", ()=> {
    test("toBe", () => {
        // === or triple equal to
        expect(10).toBe(10);
        //boolean
        expect(false).toBe(false)
        //objects
        expect({}).not.toBe({})
    });
});

describe("toEqual", () => {
    test("array has 1 2 3", () => {
        expect([]).toEqual([]);
    });

    test("array has [1 2]", () => {
        expect([1,2]).toEqual([1,2]);
    });

    test("array has a=[1 2] and b= [1,2]", () => {
        var a =[1, 2], b = [1, 2];
        expect(a).toEqual(b);
    });

    test("array has a=[1 2] and b= [1,2,3]", () => {
        var a =[1, 2, 3], b = [1, 2]
        expect(a).toEqual(expect.arrayContaining(b));
    });

    test("array has a=[1 2] not isEqual to contains b= [1,2,3]", () => {
        var a =[1, 2], b = [1, 2, 3]
        expect(a).not.toEqual(expect.arrayContaining(b));
    });

    //Now Object Test >>>

    test("object Check 1", ()=> {
        expect({a:1}).toEqual({a:1});
    } )

    test("username, email", () => {
        //if 
        let obj = {username:"vishal",email:"vs@gc.com"}
        let out = {username: expect.any(String), email:expect.stringContaining("@gc.com")}

        expect(obj).toEqual(out);
    });

    //Relational check
    describe("relational check", () => {
        test("100+200<=300" , ()=> {
            var m=100
            var n=200
            expect(m+n).toBeLessThanOrEqual(300);
        });

        test("100+200<300", () => {
            var m =100
            var n = 100
            expect(m+n).toBeLessThan(300);
        });

        test("100+300 > 300", () => {
            var m =100
            var n = 300
            expect(m+n).toBeGreaterThan(300);
        })
    })
});