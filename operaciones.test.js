// operaciones.test.js
const { suma,division,multiplicacion,resta } = require('./operaciones');

//==========================
test('Sumar 5 + 3 debe ser igual a 8', () => {
  expect(suma(5, 3)).toBe(8);
});

test('suma negativa -10 -10 = -20', () => {
  expect(suma(-10, -10)).toBe(-20);
});

test('Suma 0 + 7 debe ser igual a 7 ', () => {
  expect(suma(0, 7)).toBe(7);
});
//==========================
test('Dividir 7 / 0 = error', () => {
  expect(() => division(7, 0)).toThrow("No se pude dividir entre 0");
});
//==========================
test('multiplicacion 2 * 5 debe ser igual a 10', () => {
  expect(multiplicacion(2, 5)).toBe(10);
});

test('multiplicacion 10 * 0 debe ser igual a 0', () => {
  expect(multiplicacion(10, 0)).toBe(0);
});

//==========================
test('resta 11 - 7 debe ser igual a 4', () => {
  expect(resta(11, 7)).toBe(4);
});