var passwordChecker = require("./password")

describe("Check password", () => {
    test("Password", () => {
      expect(passwordChecker("Vishal@123")).toBe(true);
    });

    test("Password", () => {
        expect(passwordChecker("Vishal123")).toBe(false);
      });
  });