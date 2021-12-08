
//Test function test with description >>>>

function test(description,fn){
    console.log(description);

    fn();
}

function expect(recieved){
    function toBe(actual){

        if(recieved === actual){
            console.log('Test Passed');
        }
        else {
            console.log('Test Failed');
            console.log('recieved',recieved);
            console.log('expected',actual);
        }
    }

    return {toBe};
}


// test("Add 1 and 2, sum should be 3",()=>{
//     expect(1+1).toBe(3);    //Check test cases here>>>
// });

//Your own customized testCase>>>
const sum = (a,b) => a+b;
const absDiff = (a,b) => Math.abs(a-b);

test("sum(5,3) should be 8", ()=> {
    expect(sum(5, 3)).toBe(8)
});

test("abs|3-7| should be 4", ()=> {
    expect(absDiff(3,7)).toBe(4)
});