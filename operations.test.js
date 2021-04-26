import * as operations from "./operations";

test("returns text", () => {
  expect(operations.texto("Hello World")).toMatch("Hello World");
});

test("sum 1 + 2", () => {
  expect(operations.suma(1, 2)).toBe(3);
});

test("subtraction 10 - 5", () => {
  expect(operations.resta(10, 5)).toBe(5);
});

test("multiplication 10 * 2", () => {
  expect(operations.multiplicacion(10, 2)).toBe(20);
});

describe("division tests", () => {
  test("division 10 / 2", () => {
    expect(operations.division(10, 2)).toBe(5);
  }),
    test("division 10 / 0", () => {
      expect(operations.division(10, 0)).toBe("No se puede dividir por 0");
    });
});

describe("multiplication table tests", () => {
  test("multiply 1 by 0 is 0", () => {
    expect(operations.tablaMultiplicar(1, 0)).toStrictEqual([0]);
  });

  test("when multiplier is undefined, multiply 'multiplicador' from 0 to 10", () => {
    expect(operations.tablaMultiplicar(2)).toStrictEqual([
      0,
      2,
      4,
      6,
      8,
      10,
      12,
      14,
      16,
      18,
      20,
    ]);
  });
});

test("potency 3 by 3", () => {
  expect(operations.potencia(3, 3)).toBe(27);
});

test("the square of a binomial 2 and 3 is 10", () => {
  expect(operations.anidada(2, 3)).toBe(13);
});

test("2 zeros before 30", () => {
  expect(operations.cerosIzq(30, 4)).toBe("0030");
});
