var date = require("./date");

describe("Check conversion", () => {
    test("Converting milliseconds to seconds in String format", () => {
      expect(date(5200)).toBe("5 seconds");
      expect(date(60000)).toBe("1 minute");
      expect(date(180000)).toBe("3 minutes");
      expect(date(200000)).toBe("3 minutes 20 seconds");
    });
  });