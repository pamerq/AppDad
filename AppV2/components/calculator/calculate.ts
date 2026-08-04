export function calculate(
  valorTotal: number,
  inicial: number,
  cuotas: number,
): number {
  const montoFinanciado = valorTotal - inicial;
  return montoFinanciado / cuotas;
}
