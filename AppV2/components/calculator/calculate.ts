export function calculate(
  valorTotal: number,
  inicial: number,
  cuotas: number,
): number {

  const CUOTAS_MAP = {
    6: 0.17486136,
    12: 0.09104638,
    18: 0.06317172,
    24: 0.04928198,
    30: 0.04098603,
    36: 0.03548678,
    42: 0.03158544,
    48: 0.02868259,
    54: 0.02644519,
    60: 0.02467340,
  } as const;

  const tasa = CUOTAS_MAP[cuotas as keyof typeof CUOTAS_MAP]; 
  const montoFinanciado = valorTotal - inicial;
  const intereses = montoFinanciado * tasa;
  return intereses / cuotas;
}
