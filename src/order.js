function calcularTotalPedido(valor, desconto) {
  if (desconto < 0 || desconto > 100) {
    throw new Error("Desconto inválido");
  }

  const valorFinal = valor - (valor * desconto) / 100;
  return valorFinal;
}

module.exports = { calcularTotalPedido };
