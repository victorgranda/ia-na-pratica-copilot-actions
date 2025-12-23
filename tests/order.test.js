const { calcularTotalPedido } = require("../src/order");

test("Aplica desconto corretamente", () => {
  expect(calcularTotalPedido(100, 10)).toBe(90);
});

test("Não aplica desconto quando for zero", () => {
  expect(calcularTotalPedido(100, 0)).toBe(100);
});

test("Lança erro para desconto inválido", () => {
  expect(() => calcularTotalPedido(100, 150)).toThrow();
});
