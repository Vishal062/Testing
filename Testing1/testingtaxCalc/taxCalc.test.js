const taxCalc = require("./taxCalc")


describe("tex files",()=>{

    test("checking no tex or less then 2,50,000",()=>{
        const ans = taxCalc(30000)
        expect(ans).toBe("no tex")
    })
    test("checking tex for 2,50,000 to 5,00,000",()=>{
        const ans = taxCalc(400000)
        expect(ans).toBeLessThanOrEqual(40000)
    })
    test("checking tex for  5,00,000 to 10,00,000 ",()=>{
        const ans = taxCalc(700000)
        expect(ans).toBeLessThanOrEqual(100000)
    })
    test("checking tex for 10,00,000 and abov",()=>{
        const ans = taxCalc(1500000)
        expect(ans).toBeLessThanOrEqual(400000)
    })
})