const randomStrings = require("../index");

describe("Probar funcionalidades de randomStrings", () => {
  test("probar funcionalidad", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Comprobar si existe una ciudad", () => {
    expect(randomStrings()).not.toMatch(/cordoba/);
  });
});
