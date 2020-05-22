const text = "hola mundo";

const fruits = ["manzana", "melon", "banana"];

test("Debe contener un texto", () => {
  expect(text).toMatch(/mundo/);
});

test("Tenemos una banana?", () => {
  expect(fruits).toContain("melon");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero??", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test a promise", () => {
  return reverseString2("Hola").then((string) => {
    expect(string).toBe("aloH");
  });
});

test("Test async/await", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

// afterEach(() => console.log("Despues de cada prueba"));
// afterAll(() => console.log("Despues de todas las pruebas"));

// beforeEach(() => console.log("Antes de cada prueba"));
// beforeAll(() => console.log("Antes de todas las pruebas"));
